import { css } from "@emotion/react";
import { useTheme } from "@mui/material";

export const useStyles = () => {
  const theme = useTheme();
  return {
    tosModal: css`
      min-width: 320px;
      max-width: 640px;

      .tosContent ol li strong {
        font-size: 20px;
      }
      .tosContent p strong {
        color: #ffffff;
      }
      .tosContent ol {
        padding-left: 20px;
      }

      .modal-close-btn {
        display: none!important;
      }
    `,
    tosContent: css`
      width: 100%;
      overflow-y: scroll;
      min-height: 256px;
      max-height: 480px;
    `,
    red: css`
      color: red!important;
    `,
    acceptTerms: css`
      background-color: #dfbe52;
      margin: 10px auto;
      border: none;
    `,
    ppModal: css`
      min-width: 320px;
      max-width: 640px;

      .ppContent ol li strong {
        display: block;
        font-size: 20px;
      }
      .ppContent ol li span {
        color: #979692;
      }
      .ppContent p strong {
        color: #ffffff;
      }
      .ppContent ol {
        padding-left: 20px;
      }
    `,
    ppContent: css`
      width: 100%;
      overflow-y: scroll;
      min-height: 256px;
      max-height: 480px;
    `,
  };
};
