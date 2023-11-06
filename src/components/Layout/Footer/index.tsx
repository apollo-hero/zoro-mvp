/** @jsxImportSource @emotion/react */
import Typography from '@mui/material/Typography';
import config from 'config';
import React from 'react';
import { useTranslation } from 'translation';
//import { generateZkScanUrl } from 'utilities';

import { useGetBlockNumber } from 'clients/api';
import { Icon } from 'components/Icon';
import { TOKENS } from 'constants/tokens';

import {
  ZORO_DISCORD_URL,
  ZORO_GITHUB_URL,
  ZORO_SUBSTACK_URL,
  ZORO_TWITTER_URL,
  ZORO_TELEGRAM_URL
} from 'constants/urls';
import { useStyles } from './styles';

export interface FooterUiProps {
  currentBlockNumber: number | undefined;
}

export const FooterUi: React.FC<FooterUiProps> = ({ currentBlockNumber }) => {
  const styles = useStyles();
  const { t } = useTranslation();

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
          {t('footer.latestNumber')}
          <br css={styles.blockInfoMobileLineBreak} />
          <span css={styles.blockInfoNumber}>{currentBlockNumber}</span>
        </Typography>
      )}

      <div css={styles.links}>
        <a css={styles.link} href={ZORO_SUBSTACK_URL} target="_blank" rel="noreferrer">
          <Icon name="medium" color={styles.theme.palette.text.primary} size="12px" />
        </a>

        <a css={styles.link} href={ZORO_DISCORD_URL} target="_blank" rel="noreferrer">
          <Icon name="discord" color={styles.theme.palette.text.primary} size="12px" />
        </a>

        <a css={styles.link} href={ZORO_TWITTER_URL} target="_blank" rel="noreferrer">
          <Icon name="twitter" color={styles.theme.palette.text.primary} size="12px" />
        </a>

        <a css={styles.link} href={ZORO_GITHUB_URL} target="_blank" rel="noreferrer">
          <Icon name="github" color={styles.theme.palette.text.primary} size="12px" />
        </a>

        <a css={styles.link} href={ZORO_TELEGRAM_URL} target="_blank" rel="noreferrer">
          <Icon name="telegram" color={styles.theme.palette.text.primary} size="12px" />
        </a>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const { data: getBlockNumberData } = useGetBlockNumber();

  return <FooterUi currentBlockNumber={getBlockNumberData?.blockNumber} />;
};

export default Footer;
