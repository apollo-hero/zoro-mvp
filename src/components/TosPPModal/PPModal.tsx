/** @jsxImportSource @emotion/react */
import { Modal, ModalProps } from 'components';
import React from 'react';
import TosPPModal from '.';
import { useTranslation } from 'translation';

export interface PPModalProps {
  open: boolean;
  handleClose: ModalProps['handleClose'];
}

const PPModal: React.FC<PPModalProps> = ({
  open,
  handleClose,
}) => {
  const { t } = useTranslation();
  
  return (
    <TosPPModal className="tospp-modal" isOpen={open} handleClose={handleClose} title={t('pp.header')}>
        <>Privacy Policy Modal</>
    </TosPPModal>
  );
};

export default PPModal;