import { css } from '@emotion/react';
import { useTheme } from '@mui/material';
import notfound_bg from '../../assets/img/notfound-bg.webp';

export const useStyles = () => {
  const theme = useTheme();

  return {
    notfound: css`
      width: 100vw;
      height: 100vh;
      background-color: var(--color-bg-main); 
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      ${theme.breakpoints.down('lg')} {
      }
    `,
    header: css`
      width: 100vw;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 0;
    `,
    logo: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    divider: css`
      width: 90vw;
      height: 1px;
      padding: 1px;
      background: linear-gradient(90deg, rgba(223, 190, 82, 0.05) 0%, #DFBE52 52.02%, rgba(30, 30, 30, 0.07) 100%);
      opacity: 0.6;
    `,
    logoDesktop: css`
      display: block;
      min-width: 256px;
      height: auto;
      margin: 16px auto;
      color: white!important;

      ${theme.breakpoints.down("xl")} {
        display: none;
      }
    `,
    logoMobile: css`
      display: none;
      ${theme.breakpoints.down("xl")} {
        display: block;
        max-width: 76px;
        height: auto;
        margin: 16px auto;
      }
    `,
    content: css`
      z-index: 3;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
    contentImg: css`
      max-width: 256px;
      height: auto;
    `,
    contentText: css`
      color: var(--White, #FFF);
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px; /* 155.556% */
      opacity: 0.8;
    `,
    bg: css`
      width: 100%;
      height: 50%;
      position: absolute;
      bottom: 0px;
      margin: auto;
      flex-shrink: 0;
      background: linear-gradient(180deg, #0D0801 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(0deg, rgba(13, 8, 1, 0.50) 0%, rgba(13, 8, 1, 0.50) 100%), url(${notfound_bg}), lightgray 0px -538.06px / 100% 227.502% no-repeat;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      z-index: 1;
      `,
    ellipseL: css`
      width: 56%;
      height: 52%;
      transform: rotate(53.512deg);
      flex-shrink: 0;
      border-radius: 100%;
      opacity: 0.2;
      background: linear-gradient(180deg, #a04e01 14.12%, #e38c27 47.51%, #dfbe52 91.58%);
      filter: blur(200px);
      position: absolute;
      left: -40vw;
      top: -10vh;
      z-index: 2;
    `,
    ellipseR: css`
      width: 56%;
      height: 52%;
      transform: rotate(-126.848deg);
      flex-shrink: 0;
      border-radius: 100%;
      opacity: 0.1;
      background: linear-gradient(180deg, #927B2F 14.12%, #B8864B 47.51%, #DFBE52 91.85%);
      filter: blur(200px);
      position: absolute;
      top: 40vh;
      right: -40vw;
      z-index: 2;
    `,
  };
};
