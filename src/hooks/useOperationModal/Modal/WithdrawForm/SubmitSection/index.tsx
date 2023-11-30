/** @jsxImportSource @emotion/react */
import { FormError } from "../useForm/types";
import { PrimaryButton } from "components";
import React, { useContext, useMemo } from "react";
import { useTranslation } from "translation";
import { GeolocationContext } from "context/GeolocationContext";
export interface SubmitSectionProps {
  isFormValid: boolean;
  isFormSubmitting: boolean;
  fromTokenAmountTokens: string;
  formError?: FormError;
}

export const SubmitSection: React.FC<SubmitSectionProps> = ({
  isFormValid,
  isFormSubmitting,
  fromTokenAmountTokens,
  formError,
}) => {
  const { t } = useTranslation();
  const { geolocation } = useContext(GeolocationContext);

  const submitButtonLabel = useMemo(() => {
    if(geolocation) {
      return t("blockedRegion");
    }

    if (!isFormSubmitting && formError === "HIGHER_THAN_WITHDRAWABLE_AMOUNT") {
      return t(
        "operationModal.withdraw.submitButtonLabel.higherThanWithdrawableAmount"
      );
    }

    if (!isFormValid) {
      return t("operationModal.withdraw.submitButtonLabel.enterValidAmount");
    }

    return t("operationModal.withdraw.submitButtonLabel.withdraw");
  }, [fromTokenAmountTokens, isFormValid, formError, isFormSubmitting]);

  return (
    <PrimaryButton
      type="submit"
      loading={isFormSubmitting}
      disabled={geolocation || !isFormValid || isFormSubmitting}
      fullWidth
      className="custom-btn-wrap"
    >
      {submitButtonLabel}
    </PrimaryButton>
  );
};

export default SubmitSection;
