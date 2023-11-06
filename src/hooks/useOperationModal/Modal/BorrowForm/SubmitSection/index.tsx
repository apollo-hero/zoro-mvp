/** @jsxImportSource @emotion/react */
import { FormError } from "../useForm/types";
import { useStyles } from "./styles";
import BigNumber from "bignumber.js";
import { PrimaryButton } from "components";
import React, { useMemo } from "react";
import { useTranslation } from "translation";

export interface SubmitSectionProps {
  isFormValid: boolean;
  isFormSubmitting: boolean;
  safeLimitTokens: string;
  fromTokenAmountTokens: string;
  formError?: FormError;
}

export const SubmitSection: React.FC<SubmitSectionProps> = ({
  isFormValid,
  isFormSubmitting,
  safeLimitTokens,
  fromTokenAmountTokens,
  formError,
}) => {
  const { t } = useTranslation();
  const styles = useStyles();

  const isHighRiskBorrow = useMemo(
    () =>
      new BigNumber(fromTokenAmountTokens).isGreaterThanOrEqualTo(
        safeLimitTokens
      ),
    [fromTokenAmountTokens, safeLimitTokens]
  );

  const submitButtonLabel = useMemo(() => {
    if (!isFormSubmitting && formError === "BORROW_CAP_ALREADY_REACHED") {
      return t("operationModal.borrow.submitButtonLabel.borrowCapReached");
    }

    if (!isFormSubmitting && formError === "HIGHER_THAN_BORROWABLE_AMOUNT") {
      return t(
        "operationModal.borrow.submitButtonLabel.amountHigherThanBorrowableAmount"
      );
    }

    if (!isFormSubmitting && formError === "HIGHER_THAN_BORROW_CAP") {
      return t(
        "operationModal.borrow.submitButtonLabel.amountHigherThanBorrowCap"
      );
    }

    if (!isFormValid) {
      return t("operationModal.borrow.submitButtonLabel.enterValidAmount");
    }

    if (!isFormSubmitting && isHighRiskBorrow) {
      return t("operationModal.borrow.submitButtonLabel.borrowHighRiskAmount");
    }

    return t("operationModal.borrow.submitButtonLabel.borrow");
  }, [
    fromTokenAmountTokens,
    isFormValid,
    formError,
    isHighRiskBorrow,
    isFormSubmitting,
  ]);

  return (
    <PrimaryButton
      css={styles.getSubmitButton({ isHighRiskBorrow })}
      type="submit"
      loading={isFormSubmitting}
      disabled={!isFormValid || isFormSubmitting}
      fullWidth
      className="custom-btn-wrap"
    >
      {submitButtonLabel}
    </PrimaryButton>
  );
};

export default SubmitSection;
