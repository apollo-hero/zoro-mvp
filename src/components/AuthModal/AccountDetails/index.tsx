/** @jsxImportSource @emotion/react */
import { SecondaryButton } from "../../Button";
import { EllipseAddress } from "../../EllipseAddress";
import { Icon } from "../../Icon";
import { ZkLink } from "../../ZkLink";
import { useStyles } from "./styles";
import Typography from "@mui/material/Typography";
import React from "react";
import { useTranslation } from "translation";

export interface AccountDetailsProps {
  onLogOut: () => void;
  onCopyAccountAddress: (accountAddress: string) => void;
  accountAddress: string;
}

export const AccountDetails: React.FC<AccountDetailsProps> = ({
  onLogOut,
  onCopyAccountAddress,
  accountAddress,
}) => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div css={styles.container}>
      <div css={styles.infoContainer}>
        <div css={styles.infoRightColumn}>
          <div css={styles.accountAddressContainer}>
            <Typography component="span" css={styles.accountAddress}>
              <EllipseAddress ellipseBreakpoint="md" address={accountAddress} />
            </Typography>

            <button
              onClick={() => onCopyAccountAddress(accountAddress)}
              type="button"
              css={styles.copyButton}
            >
              <Icon name="copy" css={styles.copyButtonIcon} />
            </button>
          </div>
        </div>
      </div>

      <ZkLink css={styles.zkScanLinkContainer} hash={accountAddress} />

      <SecondaryButton onClick={onLogOut} fullWidth className="custom-btn-wrap">
        {t("authModal.accountDetails.logOutButtonLabel")}
      </SecondaryButton>
    </div>
  );
};
