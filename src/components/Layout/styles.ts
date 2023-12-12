import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const theme = useTheme();
  return {
    layout: css`
      display: flex;
      flex: 1;
      flex-direction: row;
      height: 100vh;
      ${theme.breakpoints.down('lg')} {
        flex-direction: column;
      }
    `,
    contentWith: css`
      height: calc(100vh - ${theme.spacing(24)});
      overflow-y: scroll;
    `,
    contentWithout: css`
      height: calc(100vh - ${theme.spacing(14)});
      overflow-y: scroll;
    `,
    notifyBar: css`
      width: 100%;
      background-color: #ff5252;
      font-size: 16px;
      padding: 5px 15px;
      box-shadow: 0 0 2px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1000;
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
  };
};
