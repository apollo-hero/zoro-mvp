/** @jsxImportSource @emotion/react */
import { useStyles } from "./styles";
import Typography from "@mui/material/Typography";
//import { generateZkScanUrl } from 'utilities';
import { useGetBlockNumber } from "clients/api";
import { Icon } from "components/Icon";
import config from "config";
import {
  ZORO_DISCORD_URL,
  ZORO_GITHUB_URL,
  ZORO_SUBSTACK_URL,
  ZORO_TWITTER_URL,
  ZORO_TELEGRAM_URL,
} from "constants/urls";
import React, { useState } from "react";
import { useTranslation } from "translation";
import TosModal from "components/TosPPModal/TosModal";
import PPModal from "components/TosPPModal/PPModal";
export interface FooterUiProps {
  currentBlockNumber: number | undefined;
}

export const FooterUi: React.FC<FooterUiProps> = ({ currentBlockNumber }) => {
  const [openTos, setOpenTos] = useState(false);
  const [openPP, setOpenPP] = useState(false);
  const styles = useStyles();
  const { t } = useTranslation();

  const toggleModalTos = (e) => {
    e.preventDefault();
    setOpenTos(!openTos);
  }
  
  const toggleModalPP = (e) => {
    e.preventDefault();
    setOpenPP(!openPP);
  }

  return (
    <div css={styles.container}>
      {!!currentBlockNumber && (
        <Typography
          component="a"
          variant="small2"
          css={styles.blockInfo}
          href={config.zkScanUrl}
          target="_blank"
          rel="noreferrer"
        >
          {t("footer.latestNumber")}
          <br css={styles.blockInfoMobileLineBreak} />
          <span css={styles.blockInfoNumber}>{currentBlockNumber}</span>
        </Typography>
      )}

      <div css={styles.links}>
        <a
          css={styles.link}
          href={ZORO_SUBSTACK_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Follow Medium articles"
        >
          <Icon
            name="medium"
            color={styles.theme.palette.text.primary}
            size="12px"
          />
        </a>

        <a
          css={styles.link}
          href={ZORO_DISCORD_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Join Discord Community"
        >
          <Icon
            name="discord"
            color={styles.theme.palette.text.primary}
            size="12px"
          />
        </a>

        <a
          css={styles.link}
          href={ZORO_TWITTER_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Follow Twitter"
        >
          <Icon
            name="twitter"
            color={styles.theme.palette.text.primary}
            size="12px"
          />
        </a>

        <a
          css={styles.link}
          href={ZORO_GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Explore GitHub repositories"
        >
          <Icon
            name="github"
            color={styles.theme.palette.text.primary}
            size="12px"
          />
        </a>

        <a
          css={styles.link}
          href={ZORO_TELEGRAM_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Join Telegram Community"
        >
          <Icon
            name="telegram"
            color={styles.theme.palette.text.primary}
            size="12px"
          />
        </a>
      </div>

      <div css={styles.tospp}>
        <Typography
          component="a"
          css={styles.tosppItem}
          rel="noreferrer"
          onClick={toggleModalTos}
          aria-label="Read Terms of Service"
          href="#"
        >
          {t("tos.title")}
        </Typography>
        <Typography
          component="a"
          css={styles.tosppItem}
          rel="noreferrer"
          onClick={toggleModalPP}
          aria-label="Read Privacy Policy"
          href="#"
        >
          {t("pp.title")}
        </Typography>
      </div>
      <TosModal open={openTos} handleClose={toggleModalTos} />
      <PPModal open={openPP} handleClose={toggleModalPP} />
    </div>
  );
};

const Footer: React.FC = () => {
  const { data: getBlockNumberData } = useGetBlockNumber();

  return <FooterUi currentBlockNumber={getBlockNumberData?.blockNumber} />;
};

export default Footer;
