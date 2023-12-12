/** @jsxImportSource @emotion/react */
import { Modal, ModalProps } from 'components';
import React from 'react';

export interface TosPPModalProps {
  title: string;
  open: boolean;
  handleClose: ModalProps['handleClose'];
}

const TosPPModal: React.FC<TosPPModalProps> = ({
  title,
  isOpen,
  handleClose,
  children,
  ...otherProps
}) => {
  
  return (
    <Modal isOpen={isOpen} handleClose={handleClose} title={title} {...otherProps} >
        <>{children}</>
    </Modal>
  );
};

export default TosPPModal;