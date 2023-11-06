import React, { useEffect } from 'react';
import { Switch as RRSwitch, Redirect, Route, useHistory, useLocation } from 'react-router-dom';
import { isFeatureEnabled } from 'utilities';

import 'assets/styles/App.scss';
import { routes } from 'constants/routing';
import { useAuth } from 'context/AuthContext';
import Account from 'pages/Account';
import Dashboard from 'pages/Dashboard';
import Market from 'pages/Market';
import Pool from 'pages/Pool';

const Switch = () => {
  const { accountAddress } = useAuth();
  const location = useLocation();
  const history = useHistory();

  // Redirect to account page if user has already connected their wallet and is
  // visiting the dashboard. If they refresh the page while being on the
  // dashboard, the redirection will not happen
  useEffect(() => {
    if (!!accountAddress && location.pathname === routes.dashboard.path && history.length <= 2) {
      history.replace(routes.account.path);
    }
  }, [location, accountAddress, history]);


  return (
    <RRSwitch>
      <Route exact path={routes.dashboard.path} component={Dashboard} />

      {!!accountAddress && <Route exact path={routes.account.path} component={Account} />} 

      <Route exact path={routes.market.path} component={Market} />

      {!isFeatureEnabled('isolatedPools') && (
        <Route exact path={routes.markets.path} component={Pool} />
      )}
      <Redirect to={routes.dashboard.path} />
    </RRSwitch>
  );
};

export default Switch;
