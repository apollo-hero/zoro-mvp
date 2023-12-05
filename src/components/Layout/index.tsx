/** @jsxImportSource @emotion/react */
import Box from '@mui/material/Box';
import React from 'react';
import { useLocation } from 'react-router';

import Header from './Header';
import { PageContainer } from './PageContainer';
import Sidebar from './Sidebar';
import { useStyles } from './styles';
import { routes } from 'constants/routing';

export const Layout: React.FC = ({ children }) => {
  const styles = useStyles();
  const location = useLocation();

  const isLayout = location.pathname === routes.notfound.path;

  if (isLayout) return <>{children}</>;

  return (
    <div css={styles.layout}>
      <Sidebar /> 

      <Box display="flex" flexDirection="column" flex="1">
        <Header /> 
        <PageContainer>{children}</PageContainer>
      </Box>
    </div>
  );
};
