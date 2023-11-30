import { css } from "@emotion/react";
import { useTheme } from "@mui/material";

export const useStyles = () => {
  const theme = useTheme();

  return {
    notifyBar: css`
      width: 100%;
      background-color: #ff5252;
      font-size: 16px;
      padding: 5px 15px;
      box-shadow: 0 0 2px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      `,
    notifyText: css`
      color: black;
      margin: 0px;
    `,
    notifyClose: css`
      border: 1px solid #0d08801;
      cursor: pointer;
      color: black;
    `,
    hide: css`
      display: none;
    `,
    appBar: css`
      background-image: none;
      background-color: transparent;
      box-shadow: none;
      padding: 0;
    `,
    toolbar: css`
      padding: ${theme.spacing(8, 10, 0)} !important;
      justify-content: space-between;
      display: flex;

      ${theme.breakpoints.down("lg")} {
        padding-left: ${theme.spacing(6)} !important;
        padding-right: ${theme.spacing(6)} !important;
      }

      ${theme.breakpoints.down("md")} {
        padding: ${theme.spacing(6, 4, 0)} !important;
      }
    `,
    claimXvsButton: css`
      margin-right: ${theme.spacing(6)};
    `,
    ctaContainer: css`
      display: flex;
      align-items: center;
      margin-left: auto;

      ${theme.breakpoints.down("md")} {
        display: none;
      }
    `,
  };
};
