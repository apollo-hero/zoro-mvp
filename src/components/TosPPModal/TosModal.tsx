/** @jsxImportSource @emotion/react */
import { Modal, ModalProps } from 'components';
import React from 'react';
import TosPPModal from '.';
import { useTranslation } from 'translation';

export interface TosModalProps {
  title: string;
  open: boolean;
  handleClose: ModalProps['handleClose'];
}

const TosModal: React.FC<TosModalProps> = ({
  open,
  handleClose,
}) => {
  const { t } = useTranslation();
  
  return (
    <TosPPModal className="tospp-modal" isOpen={open} handleClose={handleClose} title={t('tos.header')}>
        <>Terms of Service Modal</>
    </TosPPModal>
  );
};

export default TosModal;