/** @jsxImportSource @emotion/react */
import React from 'react';

//import { useGetPools, useGetVaults } from 'clients/api';
import { useStyles } from './styles';
import { ReactComponent as LogoMobile } from 'assets/img/Logo-01.svg';
import { ReactComponent as LogoDesktop } from 'assets/img/Logo-02.svg';
import notfound404 from 'assets/img/404.png';

const NotFound: React.FC = () => {
  const styles = useStyles();

  return (
    <>
      <div css={styles.notfound}>
        <div css={styles.header}> 
          <div css={styles.logo}>
            <LogoMobile css={styles.logoMobile} />
            <LogoDesktop css={styles.logoDesktop} />
          </div>
          <div css={styles.divider} />
        </div>
        <div css={styles.content}>
          <img src={notfound404} css={styles.contentImg} />
          <p css={styles.contentText}>You reached this page in error</p>          
        </div>
        <div css={styles.ellipseL} />
        <div css={styles.ellipseR} />
        <div css={styles.bg} />
      </div>
    </>
  );
};

export default NotFound;
