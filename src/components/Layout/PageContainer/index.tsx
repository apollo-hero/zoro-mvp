/** @jsxImportSource @emotion/react */
import Footer from "../Footer";
import { useStyles } from "./styles";
import Box from "@mui/material/Box";
import React, { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
  const styles = useStyles();
  return (
    <>
      <Box component="main" className="dashboard-main" css={styles.main}>
        {children}
      </Box>
      <Box component="footer" css={styles.footer}>
        <Footer />
      </Box>
    </>
  );
};
