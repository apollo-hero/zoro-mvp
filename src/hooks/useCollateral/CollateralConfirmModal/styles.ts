import { css } from '@emotion/react';
import { useTheme } from "@mui/material";

export const useStyles = () => {
  const theme = useTheme();
  
  return{
  collateralCell: css`
    display: flex;
    justify-content: flex-end;
    padding-right: 24px;
  `,
  loadingIcon: css`
    height: 68px;
    width: 68px;
  `,
  collateralModalContainer: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `,
  confirmText: css`
    margin-top: ${theme.spacing(6)};
  `,
  logoContainer: css`
    width: 492px;
    height: 402px;
    flex-shrink: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    ${theme.breakpoints.down('sm')} {
      width: 224px;
      height: 256px;
    }
  `,
  logoEllipse: css`
    width: 337.608px;
    height: 384.887px;
    transform: rotate(53.152deg);
    flex-shrink: 0;
    border-radius: 384.887px;
    opacity: 0.14;
    background: linear-gradient(180deg, #A04E01 14.12%, #E38C27 47.51%, #DFBE52 91.85%);
    filter: blur(150px);
    ${theme.breakpoints.down('sm')} {
      width: 200px;
      height: 216px;
      border-radius: 216px;
      filter: blur(64px);
    }
  `,
  transactiongraphics_logo: css`
    width: 208px;
    height: 208px;
    flex-shrink: 0;
    position: absolute;
    top: 50%;  
    left: 50%; 
    transform: translate(-50%, -50%);
  `
}};
