import _ from "lodash";
import { ethers } from "ethers";
import BigNumber from 'bignumber.js';
import { ContractCallContext, Multicall } from 'ethereum-multicall';
import config from 'config';
import { Market } from 'types';

import { VBEP_TOKENS } from 'constants/tokens';
import lensAbi from "constants/contracts/abis/venusLens.json";
import comptrollerAbi from "constants/contracts/abis/comptroller.json";
import erc20Abi from "constants/contracts/abis/erc20.json";

export interface GetMainMarketsResponse {
  dailyVenus: number;
  markets: Market[];
  request: { addresses: string[] };
  venusRate: string;
}

export interface GetMainMarketsOutput {
  markets: Market[];
}

const BLOCKS_PER_DAY = new BigNumber(6171);

function getTokenData(address) {
  const tokenAddress = address.toLowerCase();
  const tokenData = { address };
  tokenData["symbol"] = VBEP_TOKENS[tokenAddress].symbol;
  tokenData["name"] = tokenData["symbol"];
  tokenData["underlyingSymbol"] = VBEP_TOKENS[tokenAddress].underlyingToken.symbol;
  tokenData["underlyingName"] = tokenData["underlyingSymbol"];

  return tokenData;
}

const dataToString = (i, d) => ethers.BigNumber.from(d?.[i])?.toString();

function parseMarketMetadata(data, underlyingPrice) {
  const paramMapping = {
    "exchangeRate": 1,
    "supplyRatePerBlock": 2,
    "borrowRatePerBlock": 3,
    "reserveFactor": 4,
    "totalBorrows": 5,
    "totalReserves": 6,
    "totalSupply": 7,
    "cash": 8,
    "collateralFactor": 10,
    "underlyingAddress": 11,
    "underlyingDecimal": 13,
    "compSupplySpeeds": 14, // Use for supplierDailyVenus
    "compBorrowSpeeds": 15,
    "borrowCaps": 16,
  };

  const marketMetadata = _.mapValues(paramMapping, (i) => dataToString(i, data));

  marketMetadata["underlyingPrice"] = underlyingPrice;

  const { underlyingDecimal } = marketMetadata;

  const formatUnderlying = (amount) =>
  ethers.utils.formatUnits(amount, underlyingDecimal);

  const usdValue = (amount) => {
    const base = ethers.constants.WeiPerEther.toString(); // 1e18
    return (new BigNumber(amount)).times(underlyingPrice).div(base).div(base);
  };

  for (const total of ["totalBorrows", "totalSupply"]) {
    marketMetadata[`${total}2`] = formatUnderlying(marketMetadata[total]);
    marketMetadata[`${total}Usd`] = usdValue(marketMetadata[total]);
  }

  return marketMetadata;
}

function parseComptrollerData(returnContext, tokenAddress) {
  const comptrollerDataKeys = {
    "venusBorrowIndex": 0,
    "venusSupplyIndex": 1,
    "venusSpeeds": 2,
  }

  const tokenReturnContext = returnContext.filter((context) => {
    return context?.methodParameters?.[0] === tokenAddress;
  });

  const comptrollerData = _.mapValues(comptrollerDataKeys, (i) => {
    return dataToString(0, tokenReturnContext?.[i]?.returnValues);
  });

  return comptrollerData;
}

function getContractCallContexts(multicallAddress, venusLensContract, comptroller, vTokenAddresses) {
  const erc20BalanceContext = (token, account) => {
    return {
      reference: token,
      contractAddress: token,
      abi: erc20Abi,
      calls: [
        {
          reference: "balanceOf",
          methodName: "balanceOf",
          methodParameters: [account],
        },
      ],
    };
  };

  const ethBalanceContext = (account) => {
    return {
      reference: multicallAddress,
      contractAddress: multicallAddress,
      abi: [{
        "constant": true,
        "inputs": [{ "name": "addr", "type": "address" }],
        "name": "getEthBalance",
        "outputs": [{ "name": "balance", "type": "uint256" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }],
      calls: [
        {
          reference: "getEthBalance",
          methodName: "getEthBalance",
          methodParameters: [account],
        },
      ],
    };
  };

  const erc20Balances = vTokenAddresses.map((tokenAddress) => {
    const tokenConfig = VBEP_TOKENS[tokenAddress.toLowerCase()];
    const underlyingAddress = tokenConfig.underlyingToken.address;

    if (tokenConfig.underlyingToken.symbol === "eth") {
      return erc20BalanceContext(underlyingAddress, tokenAddress);
    } else {
      return ethBalanceContext(tokenAddress);
    }
  });

  const contractCallContexts: ContractCallContext[] = [
    {
      reference: venusLensContract.address,
      contractAddress: venusLensContract.address,
      abi: lensAbi,
      calls: [
        {
          reference: "cTokenMetadataAll",
          methodName: "cTokenMetadataAll",
          methodParameters: [vTokenAddresses],
        },
        {
          reference: "cTokenUnderlyingPriceAll",
          methodName: "cTokenUnderlyingPriceAll",
          methodParameters: [vTokenAddresses],
        },
      ],
    },
    {
      reference: comptroller.address,
      contractAddress: comptroller.address,
      abi: comptrollerAbi,
      calls: vTokenAddresses.flatMap((tokenAddress) => {
        return [
          {
            reference: "compBorrowState",
            methodName: "compBorrowState",
            methodParameters: [tokenAddress],
          },
          {
            reference: "compSupplyState",
            methodName: "compSupplyState",
            methodParameters: [tokenAddress],
          },
          {
            reference: "compSpeeds",
            methodName: "compSpeeds",
            methodParameters: [tokenAddress],
          },
        ];
      }),
    },
    ...erc20Balances,
  ];

  return contractCallContexts;
}

function getApyData(marketMetadata) {
  const { borrowRatePerBlock, supplyRatePerBlock } = marketMetadata;

  // Replace this with most recent average block confirmation time
  const base = ethers.constants.WeiPerEther.toString(); // 1e18

  const rates = {
    "borrowApy": borrowRatePerBlock,
    "supplyApy": supplyRatePerBlock,
  };

  const apyData = _.mapValues(rates, (rate) => {
    return (BLOCKS_PER_DAY.times(borrowRatePerBlock).div(base).plus(1))
    .pow(365).minus(1);
  });

  return apyData;
}

const getMainMarkets = async ({
  multicall,
  venusLensContract,
  comptroller
}): Promise<GetMainMarketsOutput> => {
  const vTokenAddresses = _.map(VBEP_TOKENS, "address");

  const multicallAddress = multicall.getContractBasedOnNetwork(config.chainId);
  const contractCallContexts = getContractCallContexts(
    multicallAddress,
    venusLensContract,
    comptroller,
    vTokenAddresses
  );

  const results = await multicall.call(contractCallContexts);

  const lensReturnContext = results?.results?.[venusLensContract.address]?.callsReturnContext;
  const metadataResults = _.keyBy(lensReturnContext?.[0]?.returnValues, 0);
  const pricesResults = _.keyBy(lensReturnContext?.[1]?.returnValues, 0);

  const comptrollerReturnContext = results?.results?.[comptroller.address]?.callsReturnContext;

  let markets: Market[] = [];

  const marketsData = await Promise.all(vTokenAddresses.map(async (address) => {
    const tokenData = getTokenData(address);

    const data = metadataResults[address];

    const price = pricesResults[address];
    const underlyingPrice = dataToString(1, price);

    const marketMetadata = parseMarketMetadata(data, underlyingPrice);

    const comptrollerData = parseComptrollerData(comptrollerReturnContext, address);

    const apyData = getApyData(marketMetadata);

    const { exchangeRate } = marketMetadata;
    const base = ethers.constants.WeiPerEther.toString(); // 1e18
    const tokenPrice = (new BigNumber(underlyingPrice)).times(exchangeRate).div(base).div(base);

    const { compBorrowSpeeds, compSupplySpeeds } = marketMetadata;
    const borrowerDailyVenus = BLOCKS_PER_DAY.times(compBorrowSpeeds);
    const supplierDailyVenus = BLOCKS_PER_DAY.times(compSupplySpeeds);

    const tokenConfig = VBEP_TOKENS[address.toLowerCase()];
    const underlyingAddress = tokenConfig.underlyingToken.address;

    const erc20ReturnContext = results?.results?.[underlyingAddress]?.callsReturnContext;
    let balance = ethers.BigNumber.from(0);
    if (erc20ReturnContext) {
      balance = ethers.BigNumber.from(erc20ReturnContext?.[0]?.returnValues?.[0]);
    } else { // If there is no context, underlying is native, e.g. ETH
      const ethReturnContext = results?.results?.[multicallAddress]?.callsReturnContext;
      balance = ethers.BigNumber.from(ethReturnContext?.[0]?.returnValues?.[0]);
    }

    const { underlyingDecimal } = marketMetadata;
    const liquidity = ethers.utils.formatUnits(
      balance.mul(underlyingPrice).div(base),
      underlyingDecimal
    );

    return {
      ...tokenData,
      ...marketMetadata,
      ...comptrollerData,
      ...apyData,
      tokenPrice,
      liquidity,
      borrowerDailyVenus,
      supplierDailyVenus,
      "borrowVenusApy": "0", // Requires USD value of reward token
      "supplyVenusApy": "0", // Requires USD value of reward token
      "borrowVenusApr": "0", // Requires USD value of reward token
      "supplyVenusApr": "0", // Requires USD value of reward token
      "borrowerCount": 0, // Cannot pull from contracts, only used in pages/Market on line 228
      "supplierCount": 0, // Cannot pull from contracts, only used in pages/Market on line 224
    };
  }));

  markets = Object.keys(VBEP_TOKENS).reduce<Market[]>((acc: Market[], marketAddress: string) => {
    const activeMarket = marketsData.find(
      (market: Market) => market.address.toLowerCase() === marketAddress.toLowerCase(),
    );
    if (activeMarket) {
      const formattedActiveMarket = {
        ...activeMarket,
        id: activeMarket.underlyingSymbol.toLowerCase(),
        tokenPrice: new BigNumber(activeMarket.tokenPrice),
        liquidity: new BigNumber(activeMarket.liquidity),
        borrowVenusApy: new BigNumber(activeMarket.borrowVenusApy),
        borrowVenusApr: new BigNumber(activeMarket.borrowVenusApr),
        // Note: the API returns negative borrowAPY, so until this gets
        // updated we need to flip the sign.
        // TODO: remove this once the API is updated
        borrowApy: new BigNumber(-activeMarket.borrowApy),
        supplyVenusApr: new BigNumber(activeMarket.supplyVenusApr),
        supplyVenusApy: new BigNumber(activeMarket.supplyVenusApy),
        supplyApy: new BigNumber(activeMarket.supplyApy),
        borrowBalanceCents: new BigNumber(activeMarket.totalBorrowsUsd).times(100),
        supplyBalanceCents: new BigNumber(activeMarket.totalSupplyUsd).times(100),
      };
      return [...acc, formattedActiveMarket];
    }
    return acc;
  }, []);

  console.log("Markets", markets);
  return { markets };
};

export default getMainMarkets;
