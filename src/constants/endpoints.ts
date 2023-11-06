import { ZkChainId, Environment } from 'types';

export const API_ENDPOINT_URLS: Record<Environment, string> = {
  mainnet: 'https://api.zoroprotocol.com/api',
  preview: 'https://api-preview.zoroprotocol.com/api',
  testnet: 'https://testnetapi.venus.io/api',
  storybook: 'https://testnetapi.zoroprotocol.com/api',
  ci: 'https://testnetapi.zoroprotocol.com/api',
};

export const RPC_URLS: {
  [key: string]: string[];
} = {
  [ZkChainId.MAINNET]: [
    'https://mainnet.era.zksync.io'
  ],
  [ZkChainId.TESTNET]: ['https://testnet.era.zksync.dev'],
};
