/** @jsxImportSource @emotion/react */
import Typography from '@mui/material/Typography';
import { Icon, Modal, ModalProps } from 'components';
import React from 'react';
import { useTranslation } from 'translation';
import { Asset } from 'types';

import { ReactComponent as TransactionGraphics } from 'assets/img/Transaction_Graphics.svg';

import { useStyles } from './styles';

export interface ConfirmCollateralModalProps {
  asset: Asset | undefined;
  handleClose: ModalProps['handleClose'];
}

export const CollateralConfirmModal: React.FC<ConfirmCollateralModalProps> = ({
  asset,
  handleClose,
}) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const title = asset?.isCollateralOfUser
    ? t('markets.collateralConfirmModal.disable', { asset: asset?.vToken.underlyingToken.symbol })
    : t('markets.collateralConfirmModal.enable', { asset: asset?.vToken.underlyingToken.symbol });

  return (
    <Modal className="venus-modal transcation-coin-modal" isOpen={!!asset} handleClose={handleClose} title={title}>
      <section css={styles.collateralModalContainer}>
        <div css={styles.logoContainer}>
          <TransactionGraphics css={styles.transactiongraphics_logo} />
          <div css={styles.logoEllipse} />
        </div>
        <Icon className="voting-spinner" name="loading" size="28px" css={styles.loadingIcon} />

        <Typography css={styles.confirmText} component="p" variant="body2">
          {t('markets.collateralConfirmModal.confirmText')}
        </Typography>
      </section>
    </Modal>
  );
};
