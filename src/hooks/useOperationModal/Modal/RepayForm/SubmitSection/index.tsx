/** @jsxImportSource @emotion/react */
import SwapSummary from "../../SwapSummary";
import { FormError } from "../useForm/types";
import { ApproveTokenSteps, PrimaryButton } from "components";
import React, { useContext, useMemo } from "react";
import { useTranslation } from "translation";
import { Swap, Token } from "types";
//import { areTokensEqual, getSwapRouterContractAddress } from 'utilities';
import { areTokensEqual } from "utilities";
import { GeolocationContext } from "context/GeolocationContext";

export interface SubmitSectionProps {
  isFormValid: boolean;
  isFormSubmitting: boolean;
  poolComptrollerAddress: string;
  toToken: Token;
  fromToken: Token;
  fromTokenAmountTokens: string;
  isSwapLoading: boolean;
  swap?: Swap;
  formError?: FormError;
}

export const SubmitSection: React.FC<SubmitSectionProps> = ({
  isFormValid,
  isFormSubmitting,
  poolComptrollerAddress,
  toToken,
  fromToken,
  fromTokenAmountTokens,
  formError,
  swap,
  isSwapLoading,
}) => {
  const { t } = useTranslation();
  const { geolocation } = useContext(GeolocationContext);

  const submitButtonLabel = useMemo(() => {
    if (geolocation) {
      return t("blockedRegion");
    }

    if (isSwapLoading && Number(fromTokenAmountTokens) > 0) {
      return t("operationModal.repay.submitButtonLabel.processing");
    }

    if (!isFormSubmitting && formError === "SWAP_INSUFFICIENT_LIQUIDITY") {
      return t(
        "operationModal.repay.submitButtonLabel.insufficientSwapLiquidity"
      );
    }

    if (!isFormSubmitting && formError === "SWAP_WRAPPING_UNSUPPORTED") {
      return t("operationModal.repay.submitButtonLabel.wrappingUnsupported");
    }

    if (!isFormSubmitting && formError === "SWAP_UNWRAPPING_UNSUPPORTED") {
      return t("operationModal.repay.submitButtonLabel.unwrappingUnsupported");
    }

    if (!isFormSubmitting && formError === "HIGHER_THAN_REPAY_BALANCE") {
      return t(
        "operationModal.repay.submitButtonLabel.amountHigherThanRepayBalance"
      );
    }

    if (!isFormSubmitting && formError === "HIGHER_THAN_WALLET_BALANCE") {
      return t(
        "operationModal.repay.submitButtonLabel.insufficientWalletBalance",
        {
          tokenSymbol: fromToken.symbol,
        }
      );
    }

    if (!isFormValid) {
      return t("operationModal.repay.submitButtonLabel.enterValidAmount");
    }

    return t("operationModal.repay.submitButtonLabel.repay");
  }, [
    isSwapLoading,
    fromTokenAmountTokens,
    isFormValid,
    formError,
    isFormSubmitting,
  ]);

  return (
    //<ApproveTokenSteps
    //token={fromToken}
    //spenderAddress={getSwapRouterContractAddress(poolComptrollerAddress)}
    //submitButtonLabel={t('operationModal.repay.submitButtonLabel.repay')}
    //hideTokenEnablingStep={!isFormValid || areTokensEqual(fromToken, toToken)}
    //>
    //
    // should actually be diff spenderAddress, but never hits
    <ApproveTokenSteps
      token={fromToken}
      spenderAddress={poolComptrollerAddress}
      submitButtonLabel={t("operationModal.repay.submitButtonLabel.repay")}
      hideTokenEnablingStep={!isFormValid || areTokensEqual(fromToken, toToken)}
    >
      {({ isTokenApprovalStatusLoading }) => (
        <>
          <PrimaryButton
            type="submit"
            loading={isFormSubmitting}
            disabled={
              geolocation ||
              !isFormValid ||
              isFormSubmitting ||
              isSwapLoading ||
              isTokenApprovalStatusLoading
            }
            fullWidth
            className="custom-btn-wrap"
          >
            {submitButtonLabel}
          </PrimaryButton>

          {isFormValid && !isSwapLoading && !isTokenApprovalStatusLoading && (
            <SwapSummary swap={swap} type="repay" />
          )}
        </>
      )}
    </ApproveTokenSteps>
  );
};

export default SubmitSection;
