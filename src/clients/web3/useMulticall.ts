import { Multicall } from 'ethereum-multicall';
import { useMemo } from 'react';
import { getContractAddress } from 'utilities';

import { useAuth } from 'context/AuthContext';

const useMulticall = () => {
  const { provider } = useAuth();
  const MULTICALL_ADDRESS = getContractAddress('multicall');
  return useMemo(
    () =>
      new Multicall({
        multicallCustomContractAddress: MULTICALL_ADDRESS,
        ethersProvider: provider,
        tryAggregate: true,
      }),
    [provider],
  );
};

export default useMulticall;
