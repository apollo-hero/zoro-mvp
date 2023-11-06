import { QueryObserverOptions, useQuery } from 'react-query';

import getMainMarkets, { GetMainMarketsOutput } from 'clients/api/queries/getMainMarkets';
import { useMulticall } from 'clients/web3';
import { useComptrollerContract, useVenusLensContract } from 'clients/contracts/hooks';
import { getContractAddress } from "utilities";
import { DEFAULT_REFETCH_INTERVAL_MS } from 'constants/defaultRefetchInterval';
import FunctionKey from 'constants/functionKey';

type Options = QueryObserverOptions<
  GetMainMarketsOutput,
  Error,
  GetMainMarketsOutput,
  GetMainMarketsOutput,
  FunctionKey.GET_MAIN_MARKETS
>;

const useGetMainMarkets = (options?: Options) => {
  const venusLensContract = useVenusLensContract();
  const multicall = useMulticall();
  const comptrollerAddress = getContractAddress("comptroller");
  const comptroller = useComptrollerContract(comptrollerAddress);

  const result = useQuery(
    FunctionKey.GET_MAIN_MARKETS,
    () => getMainMarkets({ multicall, venusLensContract, comptroller }),
    {
      refetchInterval: DEFAULT_REFETCH_INTERVAL_MS,
      ...options,
    }
  );

  return result;
};

export default useGetMainMarkets;
