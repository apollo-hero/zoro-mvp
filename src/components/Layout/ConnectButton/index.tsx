/** @jsxImportSource @emotion/react */
import { ButtonProps, SecondaryButton } from "../../Button";
import { useConnectWallet } from "@web3-onboard/react";
import { ApproveToken } from "components";
// TESTING
import { TOKENS } from "constants/tokens";
import { useAuth } from "context/AuthContext";
import React from "react";
import { useTranslation } from "translation";
import { truncateAddress } from "utilities";

export interface ConnectButtonProps extends ButtonProps {
  accountAddress?: string;
  onClick: any;
}
//<ApproveToken
//token={TOKENS.usdc}
//spenderAddress={TOKENS.usdt.address}
//>
//test approve USDC
//</ApproveToken></div>

export const ConnectButtonUi: React.FC<ConnectButtonProps> = ({
  accountAddress,
  ...otherProps
}) => {
  const { t } = useTranslation();

  return (
    <SecondaryButton {...otherProps} className="custom-btn-wrap">
      {!accountAddress
        ? t("connectButton.title")
        : truncateAddress(accountAddress)}
    </SecondaryButton>
  );
};

export const ConnectButton: React.FC<ButtonProps> = (props) => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const { accountAddress, openAuthModal } = useAuth();

  return (
    <ConnectButtonUi
      accountAddress={accountAddress}
      onClick={wallet ? openAuthModal : async () => await connect()}
      variant={wallet ? "secondary" : "primary"}
      {...props}
      className="custom-btn-wrap"
    />
  );
};

export default ConnectButton;
