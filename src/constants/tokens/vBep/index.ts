import { VToken } from 'types';

import { TOKEN_INFO } from '../common/';

export const ZTOKEN_INFO = {
  // Main pool
  'test': {
    address: "",
    decimals: 18,
    symbol: 'vTEST',
    underlyingToken: TOKEN_INFO.test,
  } as VToken,
  'sxp': {
    address: "",
    decimals: 8,
    symbol: 'vSXP',
    underlyingToken: TOKEN_INFO.sxp,
  } as VToken,
  'usdc': {
    address: "",
    decimals: 8,
    symbol: 'vUSDC',
    underlyingToken: TOKEN_INFO.usdc,
  } as VToken,
  'usdt': {
    address: "",
    decimals: 8,
    symbol: 'vUSDT',
    underlyingToken: TOKEN_INFO.usdt,
  } as VToken,
  'busd': {
    address: "",
    decimals: 8,
    symbol: 'vBUSD',
    underlyingToken: TOKEN_INFO.busd,
  } as VToken,
  'bnb': {
    address: "",
    decimals: 8,
    symbol: 'vBNB',
    underlyingToken: TOKEN_INFO.bnb,
  } as VToken,
  'xvs': {
    address: "",
    decimals: 8,
    symbol: 'vXVS',
    underlyingToken: TOKEN_INFO.xvs,
  } as VToken,
  'wbtc': {
    address: "",
    decimals: 8,
    symbol: 'vBTC',
    underlyingToken: TOKEN_INFO.wbtc,
  } as VToken,
  'eth': {
    address: "",
    decimals: 18,
    symbol: 'vETH',
    underlyingToken: TOKEN_INFO.eth,
  } as VToken,
  'ltc': {
    address: "",
    decimals: 8,
    symbol: 'vLTC',
    underlyingToken: TOKEN_INFO.ltc,
  } as VToken,
  'xrp': {
    address: "",
    decimals: 8,
    symbol: 'vXRP',
    underlyingToken: TOKEN_INFO.xrp,
  } as VToken,
  'bch': {
    address: "",
    decimals: 8,
    symbol: 'vBCH',
    underlyingToken: TOKEN_INFO.bch,
  } as VToken,
  'dot': {
    address: "",
    decimals: 8,
    symbol: 'vDOT',
    underlyingToken: TOKEN_INFO.dot,
  } as VToken,
  'link': {
    address: "",
    decimals: 8,
    symbol: 'vLINK',
    underlyingToken: TOKEN_INFO.link,
  } as VToken,
  'dai': {
    address: "",
    decimals: 8,
    symbol: 'vDAI',
    underlyingToken: TOKEN_INFO.dai,
  } as VToken,
  'fil': {
    address: "",
    decimals: 8,
    symbol: 'vFIL',
    underlyingToken: TOKEN_INFO.fil,
  } as VToken,
  'beth': {
    address: "",
    decimals: 8,
    symbol: 'vBETH',
    underlyingToken: TOKEN_INFO.beth,
  } as VToken,
  'ada': {
    address: "",
    decimals: 8,
    symbol: 'vADA',
    underlyingToken: TOKEN_INFO.ada,
  } as VToken,
  'doge': {
    address: "",
    decimals: 8,
    symbol: 'vDOGE',
    underlyingToken: TOKEN_INFO.doge,
  } as VToken,
  'matic': {
    address: "",
    decimals: 8,
    symbol: 'vMATIC',
    underlyingToken: TOKEN_INFO.matic,
  } as VToken,
  'cake': {
    address: "",
    decimals: 8,
    symbol: 'vCAKE',
    underlyingToken: TOKEN_INFO.cake,
  } as VToken,
  'aave': {
    address: "",
    decimals: 8,
    symbol: 'vAAVE',
    underlyingToken: TOKEN_INFO.aave,
  } as VToken,
  'tusd': {
    address: "",
    decimals: 8,
    symbol: 'vTUSD',
    underlyingToken: TOKEN_INFO.tusd,
  } as VToken,
  'tusdold': {
    address: "",
    decimals: 8,
    symbol: 'vTUSDOLD',
    underlyingToken: TOKEN_INFO.tusdold,
  } as VToken,
  'trx': {
    address: "",
    decimals: 8,
    symbol: 'vTRX',
    underlyingToken: TOKEN_INFO.trx,
  } as VToken,
  'trxold': {
    address: "",
    decimals: 8,
    symbol: 'vTRXOLD',
    underlyingToken: TOKEN_INFO.trxold,
  } as VToken,
  'ust': {
    address: "",
    decimals: 8,
    symbol: 'vUST',
    underlyingToken: TOKEN_INFO.ust,
  } as VToken,
  'luna': {
    address: "",
    decimals: 8,
    symbol: 'vLUNA',
    underlyingToken: TOKEN_INFO.luna,
  } as VToken,
  'wbeth': {
    address: "",
    decimals: 8,
    symbol: 'vWBETH',
    underlyingToken: TOKEN_INFO.wbeth,
  } as VToken,

  // Isolated assets
  // Pool 1 – Stable Coins
  'hay': {
    address: "",
    decimals: 8,
    symbol: 'vHAY',
    underlyingToken: TOKEN_INFO.hay,
  } as VToken,
  'usdd': {
    address: "",
    decimals: 8,
    symbol: 'vUSDD',
    underlyingToken: TOKEN_INFO.usdd,
  } as VToken,
  // Tron
  'nft': {
    address: "",
    decimals: 8,
    symbol: 'vNFT',
    underlyingToken: TOKEN_INFO.nft,
  } as VToken,
  'btt': {
    address: "",
    decimals: 8,
    symbol: 'vBTT',
    underlyingToken: TOKEN_INFO.btt,
  } as VToken,
  'win': {
    address: "",
    decimals: 8,
    symbol: 'vWIN',
    underlyingToken: TOKEN_INFO.win,
  } as VToken,
  // GameFi
  'raca': {
    address: "",
    decimals: 8,
    symbol: 'vRACA',
    underlyingToken: TOKEN_INFO.raca,
  } as VToken,
  'floki': {
    address: "",
    decimals: 8,
    symbol: 'vFLOKI',
    underlyingToken: TOKEN_INFO.floki,
  } as VToken,
  // DeFi
  'alpaca': {
    address: "",
    decimals: 8,
    symbol: 'vALPACA',
    underlyingToken: TOKEN_INFO.alpaca,
  } as VToken,
  'ankr': {
    address: "",
    decimals: 8,
    symbol: 'vANKR',
    underlyingToken: TOKEN_INFO.ankr,
  } as VToken,
  'bifi': {
    address: "",
    decimals: 8,
    symbol: 'vBIFI',
    underlyingToken: TOKEN_INFO.bifi,
  } as VToken,
  'bsw': {
    address: "",
    decimals: 8,
    symbol: 'vBSW',
    underlyingToken: TOKEN_INFO.bsw,
  } as VToken,
  // Liquid Staked BNB
  'wbnb': {
    address: "",
    decimals: 8,
    symbol: 'vWBNB',
    underlyingToken: TOKEN_INFO.wbnb,
  } as VToken,
  'ankrbnb': {
    address: "",
    decimals: 8,
    symbol: 'vankrBNB',
    underlyingToken: TOKEN_INFO.ankrbnb,
  } as VToken,
  'bnbx': {
    address: "",
    decimals: 8,
    symbol: 'vBNBx',
    underlyingToken: TOKEN_INFO.bnbx,
  } as VToken,
  'stkbnb': {
    address: "",
    decimals: 8,
    symbol: 'vstkBNB',
    underlyingToken: TOKEN_INFO.stkbnb,
  } as VToken,
};

