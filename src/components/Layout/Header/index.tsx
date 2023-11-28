/** @jsxImportSource @emotion/react */
//import ClaimRewardButton from '../ClaimRewardButton';
import ConnectButton from "../ConnectButton";
import { Toolbar } from "../Toolbar";
import Breadcrumbs from "./Breadcrumbs";
import { useStyles } from "./styles";
import AppBar from "@mui/material/AppBar";
import React, { useContext, useState } from "react";
import { GeolocationContext } from "context/GeolocationContext";
import { Icon } from "../../Icon";

const Header: React.FC = () => {
  const [close, setClose] = useState(false);
  const styles = useStyles();
  const { geolocation } = useContext(GeolocationContext);
  const onClickClose = () => {
    setClose(true);
  }

  return (
    <>    
      {geolocation && <div css={close? styles.hide : styles.notifyBar}>
        <p css={styles.notifyText}>Your region is restricted to use our website.</p>
        <Icon name="close" css={styles.notifyClose} onClick={onClickClose}/>
      </div>}
      <AppBar position="relative" css={styles.appBar} className="header-wrap">
        <Toolbar css={styles.toolbar}>
          <Breadcrumbs />

          <div css={styles.ctaContainer}>
            {/*<ClaimRewardButton css={styles.claimXvsButton} /> */}
            <ConnectButton />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
