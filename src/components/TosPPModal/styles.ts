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
      float: right;
      margin-top: 10px;
      margin-bottom: 10px;
      border: none;
    `,
    ppModal: css`
      min-width: 320px;
      max-width: 640px;

      .ppContent ol li strong {
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
