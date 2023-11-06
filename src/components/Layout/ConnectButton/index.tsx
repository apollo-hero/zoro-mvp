/** @jsxImportSource @emotion/react */
import React from 'react';
import { useTranslation } from 'translation';
import { truncateAddress } from 'utilities';

import { useAuth } from 'context/AuthContext';

import { ButtonProps, SecondaryButton } from '../../Button';
import { ApproveToken } from 'components';

// TESTING
import { TOKENS  } from 'constants/tokens';

export interface ConnectButtonProps extends ButtonProps {
  accountAddress?: string;
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
    <SecondaryButton {...otherProps} className='custom-btn-wrap'>
      {!accountAddress ? t('connectButton.title') : truncateAddress(accountAddress)}
    </SecondaryButton>
  );
};

export const ConnectButton: React.FC<ButtonProps> = props => {
  const { accountAddress, openAuthModal } = useAuth();
  return (
      <ConnectButtonUi
      accountAddress={accountAddress}
      onClick={openAuthModal}
      variant={accountAddress ? 'secondary' : 'primary'}
      {...props}
      className='custom-btn-wrap'
      />


      );
};

export default ConnectButton;
