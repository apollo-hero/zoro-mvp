import config from 'config';
// import { Chain, configureChains, createClient } from 'wagmi';
// import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
// import { InjectedConnector } from 'wagmi/connectors/injected';
// import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
// import { publicProvider } from 'wagmi/providers/public';

// used for ZkSync Local
// import { jsonRpcProvider  } from 'wagmi/providers/jsonRpc'

//import { WALLET_CONNECT_PROJECT_ID } from 'constants/walletConnect';

//import { BinanceWalletConnector } from './binanceWalletConnector';

// const zkExplorer = {
//   name: 'ZkScan',
//   url: config.isOnTestnet ? 'https://testnet.era.zksync.dev' : 'https://mainnet.era.zksync.io',
// };

export const chain = null;
// : Chain = {
//   id: config.chainId,
//   name: config.isOnTestnet ? 'zkSync Era Testnet' : 'zkSync Era Mainnet',
//   network: config.isOnTestnet ? 'zkSyncTestnet' : 'zkSync',
//   rpcUrls: {
//     default: {
//       http: [config.rpcUrl],
//     },
//     public: {
//       http: [config.rpcUrl],
//     },
//   },
//   blockExplorers: {
//     default: zkExplorer,
//     etherscan: zkExplorer,
//   },
//   nativeCurrency: {
//     name: 'Ethereum',
//     symbol: 'ETH',
//     decimals: 18,
//   },
// };

// use with ZkSync Testnet
//export const { provider, webSocketProvider } = configureChains([chain], [publicProvider()]);
export const { provider, webSocketProvider } = {provider: null, webSocketProvider: null}; 
// configureChains([chain], [
//   jsonRpcProvider({
//     rpc: (chain) => ({
//       http: config.rpcUrl
//     })
//   })
// ]);

const client = null;
// = createClient({
//   autoConnect: true,
//   provider,
//   connectors: [
    // new InjectedConnector({ chains: [chain] }),
    // new MetaMaskConnector({ chains: [chain] }),
    //new WalletConnectConnector({
      //chains: [chain],
      //options: {
        //projectId: WALLET_CONNECT_PROJECT_ID,
        //showQrModal: true,
      //},
    //}),
    //new CoinbaseWalletConnector({
      //chains: [chain],
      //options: {
        //appName: 'Zoro',
      //},
    //}),
    //new BinanceWalletConnector({
      //chains: [chain],
    //}),
//   ],
//   webSocketProvider,
// });

export default client;
