import icon from "../assets/img/Logo-01.svg";
import Switch from "./Switch";
import coinbaseModule from "@web3-onboard/coinbase";
import injectedModule from "@web3-onboard/injected-wallets";
import ledgerModule from "@web3-onboard/ledger";
import { Web3OnboardProvider, init } from "@web3-onboard/react";
import trezorModule from "@web3-onboard/trezor";
import trustModule from "@web3-onboard/trust";
import walletConnectModule from "@web3-onboard/walletconnect";
import "assets/styles/App.scss";
import { queryClient } from "clients/api";
import { Layout, ResetScrollOnRouteChange } from "components";
import { AuthProvider } from "context/AuthContext";
import { GeolocationProvider } from "context/GeolocationContext";
import { SuccessfulTransactionModalProvider } from "context/SuccessfulTransactionModalContext";
import React from "react";
import { QueryClientProvider } from "react-query";
import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { MuiThemeProvider } from "theme/MuiThemeProvider";

const injected = injectedModule();
const coinbase = coinbaseModule({ darkMode: true });
const walletConnect = walletConnectModule({
  projectId: "0f87fc2cf39e518bda94e227dc61150d",
  dappUrl: "https://zoro-protocol.netlify.app/", //  http://app.zoroprotocol.com/
});
const ledger = ledgerModule({
  projectId: "0f87fc2cf39e518bda94e227dc61150d",
  walletConnectVersion: 2,
});
const trust = trustModule();
const trezorOptions = {
  email: "test@test.com",
  appUrl: "https://zoro-protocol.netlify.app/", //  http://app.zoroprotocol.com/
};
const trezor = trezorModule(trezorOptions);
const wallets = [injected, trust, coinbase, walletConnect, ledger, trezor];

const chains = [
  {
    id: "0x118",
    token: "ETH",
    label: "zkSync Era Testnet RPC",
    rpcUrl: `https://testnet.era.zksync.dev	`,
  },
];

// const chains = [
//   {
//     id: "0x1",
//     token: "ETH",
//     label: "Ethereum",
//     rpcUrl: `https://rpc.mevblocker.io`,
//   },
// ];

const web3Onboard = init({
  wallets,
  chains,
  appMetadata: {
    name: "ZORO",
    icon,
    description: "Main App",
  },
  theme: "dark",
});

const App = () => (
  <GeolocationProvider>
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <QueryClientProvider client={queryClient}>
        <MuiThemeProvider>
          <AuthProvider>
            <SuccessfulTransactionModalProvider>
              <HashRouter>
                <ToastContainer />
                <Layout>
                  <Switch />
                </Layout>
              </HashRouter>
            </SuccessfulTransactionModalProvider>
          </AuthProvider>
        </MuiThemeProvider>
      </QueryClientProvider>
    </Web3OnboardProvider>
  </GeolocationProvider>
);

export default App;
