import { QueryObserverOptions, useQuery } from 'react-query';

import getVTokenBalancesAll, {
  GetVTokenBalancesAllInput,
  GetVTokenBalancesAllOutput,
} from 'clients/api/queries/getVTokenBalancesAll';
import { useVenusLensContract } from 'clients/contracts/hooks';
import { DEFAULT_REFETCH_INTERVAL_MS } from 'constants/defaultRefetchInterval';
import FunctionKey from 'constants/functionKey';

// TESTING!!
import { getBalanceOf  } from 'clients/api';
import { useAuth } from 'context/AuthContext';
import { TOKENS } from 'constants/tokens';
import {
  useGetBalanceOf,
} from 'clients/api';

// 2nd way to interface with contract
//import { getTokenContract } from 'clients/contracts';

type Options = QueryObserverOptions<
  GetVTokenBalancesAllOutput,
  Error,
  GetVTokenBalancesAllOutput,
  GetVTokenBalancesAllOutput,
  [FunctionKey.GET_V_TOKEN_BALANCES_ALL, Omit<GetVTokenBalancesAllInput, 'venusLensContract'>]
>;

const useGetVTokenBalancesAll = (
  { account, vTokenAddresses }: Omit<GetVTokenBalancesAllInput, 'venusLensContract'>,
  options?: Options,
) => {
  const venusLensContract = useVenusLensContract();
  const result = useQuery(
    [FunctionKey.GET_V_TOKEN_BALANCES_ALL, { account, vTokenAddresses }],
    () => getVTokenBalancesAll({ venusLensContract, account, vTokenAddresses }),
    {
      refetchInterval: DEFAULT_REFETCH_INTERVAL_MS,
      ...options,
    },
  );
  //const { provider } = useAuth();

  //const tokenContract = getTokenContract(TOKENS.usdc);

  //const resp = tokenContract.balanceOf(account)
  //console.log("USDC contract balance of account", resp);
  //const {data: balance_result} = useGetBalanceOf({
    //token: TOKENS.test,
    //accountAddress: account
  //})
  return result;
};

export default useGetVTokenBalancesAll;
