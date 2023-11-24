import { openInfinityWallet } from "@infinitywallet/infinity-connector";
import type { Provider } from "@wagmi/core";
import { useConnectWallet, useSetChain } from "@web3-onboard/react";
import useGetIsAddressAuthorized from "clients/api/queries/getIsAddressAuthorized/useGetIsAddressAuthorized";
import { Connector, connectorIdByName } from "clients/web3";
import { AuthModal } from "components/AuthModal";
import config from "config";
import { VError } from "errors";
import { Signer, getDefaultProvider, ethers } from "ethers";
//import { logError } from 'context/ErrorLogger';
import useCopyToClipboard from "hooks/useCopyToClipboard";
import noop from "noop-ts";
import React, { useCallback, useContext, useEffect } from "react";
import { useTranslation } from "translation";
// import {
//   ConnectorNotFoundError,
//   useAccount,
//   useConnect,
//   useDisconnect,
//   useNetwork,
//   useProvider,
//   useSigner,
// } from "wagmi";

//import { isRunningInInfinityWalletApp } from 'utilities/walletDetection';

export interface AuthContextValue {
  login: (connector: Connector) => Promise<void>;
  logOut: () => void;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  provider: Provider;
  accountAddress: string;
  signer?: Signer;
}

export const AuthContext = React.createContext<AuthContextValue>({
  login: noop,
  logOut: noop,
  openAuthModal: noop,
  closeAuthModal: noop,
  provider: getDefaultProvider(),
  accountAddress: "",
});

export const AuthProvider: React.FC = ({ children }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  // const { connectors, connectAsync } = useConnect();
  // const { disconnectAsync } = useDisconnect();
  // const { data: signer } = useSigner();
  // const provider = useProvider();
  const provider = new ethers.providers.Web3Provider(window.ethereum as any);
  const signer = provider.getSigner();

  // const { address, isConnected } = useAccount();
  // const { chain } = useNetwork();
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [{ connectedChain }, setChain] = useSetChain();

  //const { data: accountAuth } = useGetIsAddressAuthorized(address || '', {
  //enabled: address !== undefined,
  //});

  // Set address as authorized by default
  //const isAuthorizedAddress = !accountAuth || accountAuth.authorized;
  const accountAddress = wallet ? wallet.accounts[0].address : "";

  const login = useCallback(async (connectorId: Connector) => {
    // const connector =
    //   connectors.find((item) => item.id === connectorIdByName[connectorId]) ||
    //   connectors[0];

    // try {
    //   // Log user in
    //   await connectAsync({ connector, chainId: config.chainId });
    // } catch (error) {
    //   if (error instanceof ConnectorNotFoundError) {
    //     //throw new VError({ type: 'interaction', code: 'noProvider' });
    //   } else {
    //     //logError(error);
    //   }
    // }
  }, []);

  const logOut = useCallback(async () => {
    // await disconnectAsync();
  }, []);

  // Disconnect wallet if it's connected to the wrong network. Note: ideally
  // we'd instead switch the network automatically, but this seems to cause
  // issues with certain wallets such as MetaMask
  useEffect(() => {
    if (
      typeof connectedChain?.id !== "undefined" &&
      connectedChain?.id !== "0x118"
    )
      setChain({ chainId: "0x118" });
  }, [connectedChain]);

  const { t } = useTranslation();

  const copyWalletAddress = useCopyToClipboard(
    t("interactive.copy.walletAddress")
  );

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  const handleLogin = async (connector: Connector) => {
    await login(connector);
    closeAuthModal();
  };

  return (
    <AuthContext.Provider
      value={{
        accountAddress,
        login,
        logOut,
        openAuthModal,
        closeAuthModal,
        provider,
        signer: signer || undefined,
      }}
    >
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
        accountAddress={accountAddress}
        onLogOut={async () => {
          await disconnect(wallet as any);
          closeAuthModal();
        }}
        onLogin={handleLogin}
        onCopyAccountAddress={copyWalletAddress}
      />

      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
