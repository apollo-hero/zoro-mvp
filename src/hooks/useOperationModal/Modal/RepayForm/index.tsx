/** @jsxImportSource @emotion/react */
import { useStyles as useSharedStyles } from "../styles";
import SubmitSection from "./SubmitSection";
import calculatePercentageOfUserBorrowBalance from "./calculatePercentageOfUserBorrowBalance";
import { useStyles } from "./styles";
import TEST_IDS from "./testIds";
import useForm, { FormValues, UseFormInput } from "./useForm";
import BigNumber from "bignumber.js";
//import { useRepay, useSwapTokensAndRepay } from 'clients/api';
import { useRepay } from "clients/api";
import {
  AccountData,
  Delimiter,
  LabeledInlineContent,
  NoticeWarning,
  QuaternaryButton,
  SelectTokenTextField, //SwapDetails,
  TokenTextField,
} from "components";
import { useAuth } from "context/AuthContext";
import { VError } from "errors";
import useFormatTokensToReadableValue from "hooks/useFormatTokensToReadableValue";
//import useGetSwapInfo from 'hooks/useGetSwapInfo';
import useGetSwapTokenUserBalances from "hooks/useGetSwapTokenUserBalances";
import React, { useCallback, useMemo, useState } from "react";
import { useTranslation } from "translation";
//import { Asset, Pool, Swap, SwapError, TokenBalance } from 'types';
import { Asset, Pool, TokenBalance } from "types";
import {
  areTokensEqual,
  convertTokensToWei,
  convertWeiToTokens,
  formatToReadablePercentage,
  isFeatureEnabled,
} from "utilities";

export const PRESET_PERCENTAGES = [25, 50, 75, 100];

export interface RepayFormUiProps {
  asset: Asset;
  pool: Pool;
  onSubmit: UseFormInput["onSubmit"];
  isSubmitting: boolean;
  onCloseModal: () => void;
  tokenBalances?: TokenBalance[];
  setFormValues: (
    setter: (currentFormValues: FormValues) => FormValues
  ) => void;
  formValues: FormValues;
  //isSwapLoading: boolean;
  //swap?: Swap;
  //swapError?: SwapError;
}

export const RepayFormUi: React.FC<RepayFormUiProps> = ({
  asset,
  pool,
  onCloseModal,
  onSubmit,
  isSubmitting,
  tokenBalances = [],
  setFormValues,
  formValues,
  isSwapLoading,
  swap,
  swapError,
}) => {
  const { t, Trans } = useTranslation();

  const sharedStyles = useSharedStyles();
  const styles = useStyles();

  const isUsingSwap = useMemo(
    () =>
      isFeatureEnabled("integratedSwap") &&
      formValues.fromToken &&
      !areTokensEqual(asset.vToken.underlyingToken, formValues.fromToken),
    [formValues.fromToken, asset.vToken.underlyingToken]
  );

  const fromTokenUserWalletBalanceTokens = useMemo(() => {
    // Get wallet balance from the list of fetched token balances if integrated
    // swap feature is enabled and the selected token is different from the
    // asset object
    //if (isUsingSwap) {
    //const tokenBalance = tokenBalances.find(item =>
    //areTokensEqual(item.token, formValues.fromToken),
    //);

    //return (
    //tokenBalance &&
    //convertWeiToTokens({
    //valueWei: tokenBalance.balanceWei,
    //token: tokenBalance.token,
    //})
    //);
    //}

    // Otherwise get the wallet balance from the asset object
    return asset.userWalletBalanceTokens;
  }, [
    asset.userWalletBalanceTokens,
    formValues.fromToken,
    tokenBalances,
    isUsingSwap,
  ]);

  const { handleSubmit, isFormValid, formError } = useForm({
    toVToken: asset.vToken,
    fromTokenUserWalletBalanceTokens,
    fromTokenUserBorrowBalanceTokens: asset.userBorrowBalanceTokens,
    swap,
    swapError,
    onCloseModal,
    onSubmit,
    formValues,
    setFormValues,
  });

  const readableFromTokenUserWalletBalanceTokens =
    useFormatTokensToReadableValue({
      value: fromTokenUserWalletBalanceTokens,
      token: formValues.fromToken,
    });

  const readableUserBorrowBalanceTokens = useFormatTokensToReadableValue({
    value: asset.userBorrowBalanceTokens,
    token: asset.vToken.underlyingToken,
  });

  const isRepayingFullLoan = useMemo(
    () => formValues.fixedRepayPercentage === 100,
    [formValues.fixedRepayPercentage]
  );

  const handleRightMaxButtonClick = useCallback(() => {
    if (asset.userBorrowBalanceTokens.isEqualTo(0)) {
      setFormValues((currentFormValues) => ({
        ...currentFormValues,
        amountTokens: "0",
      }));
      return;
    }

    // Update field value to correspond to user's balance
    setFormValues((currentFormValues) => ({
      ...currentFormValues,
      amountTokens: new BigNumber(
        fromTokenUserWalletBalanceTokens || 0
      ).toFixed(),
      fixedRepayPercentage: undefined,
    }));
  }, [asset.userBorrowBalanceTokens, fromTokenUserWalletBalanceTokens]);

  return (
    <form onSubmit={handleSubmit}>
      <LabeledInlineContent
        css={sharedStyles.getRow({ isLast: true })}
        label={t("operationModal.repay.currentlyBorrowing")}
      >
        {readableUserBorrowBalanceTokens}
      </LabeledInlineContent>

      <div css={sharedStyles.getRow({ isLast: false })}>
        {isFeatureEnabled("integratedSwap") ? (
          <SelectTokenTextField
            data-testid={TEST_IDS.selectTokenTextField}
            selectedToken={formValues.fromToken}
            value={formValues.amountTokens}
            hasError={
              !isSubmitting &&
              !!formError &&
              Number(formValues.amountTokens) > 0
            }
            disabled={isSubmitting}
            onChange={(amountTokens) =>
              setFormValues((currentFormValues) => ({
                ...currentFormValues,
                amountTokens,
                // Reset selected fixed percentage
                fixedRepayPercentage: undefined,
              }))
            }
            onChangeSelectedToken={(fromToken) =>
              setFormValues((currentFormValues) => ({
                ...currentFormValues,
                fromToken,
              }))
            }
            rightMaxButton={{
              label: t("operationModal.repay.rightMaxButtonLabel"),
              onClick: handleRightMaxButtonClick,
            }}
            tokenBalances={tokenBalances}
            description={
              <Trans
                i18nKey="operationModal.repay.walletBalance"
                components={{
                  White: <span css={sharedStyles.whiteLabel} />,
                }}
                values={{ balance: readableFromTokenUserWalletBalanceTokens }}
              />
            }
          />
        ) : (
          <TokenTextField
            name="amountTokens"
            token={asset.vToken.underlyingToken}
            value={formValues.amountTokens}
            onChange={(amountTokens) =>
              setFormValues((currentFormValues) => ({
                ...currentFormValues,
                amountTokens,
                // Reset selected fixed percentage
                fixedRepayPercentage: undefined,
              }))
            }
            disabled={isSubmitting}
            rightMaxButton={{
              label: t("operationModal.repay.rightMaxButtonLabel"),
              onClick: handleRightMaxButtonClick,
            }}
            data-testid={TEST_IDS.tokenTextField}
            hasError={
              !isSubmitting &&
              !!formError &&
              Number(formValues.amountTokens) > 0
            }
            description={
              <Trans
                i18nKey="operationModal.repay.walletBalance"
                components={{
                  White: <span css={sharedStyles.whiteLabel} />,
                }}
                values={{ balance: readableFromTokenUserWalletBalanceTokens }}
              />
            }
          />
        )}
      </div>

      <div css={sharedStyles.getRow({ isLast: true })}>
        <div css={styles.selectButtonsContainer}>
          {PRESET_PERCENTAGES.map((percentage) => (
            <QuaternaryButton
              key={`select-button-${percentage}`}
              css={styles.selectButton}
              active={percentage === formValues.fixedRepayPercentage}
              onClick={() =>
                setFormValues((currentFormValues) => ({
                  ...currentFormValues,
                  fixedRepayPercentage: percentage,
                }))
              }
              className="custom-btn-swap"
            >
              {formatToReadablePercentage(percentage)}
            </QuaternaryButton>
          ))}
        </div>

        {isRepayingFullLoan && (
          <NoticeWarning
            css={sharedStyles.notice}
            description={t("operationModal.repay.fullRepaymentWarning")}
          />
        )}
      </div>

      <AccountData
        asset={asset}
        pool={pool}
        swap={swap}
        amountTokens={new BigNumber(formValues.amountTokens || 0)}
        action="repay"
        isUsingSwap={isUsingSwap}
      />

      <SubmitSection
        isFormSubmitting={isSubmitting}
        isFormValid={isFormValid}
        swap={swap}
        isSwapLoading={isSwapLoading}
        formError={formError}
        poolComptrollerAddress={pool.comptrollerAddress}
        toToken={asset.vToken.underlyingToken}
        fromToken={formValues.fromToken}
        fromTokenAmountTokens={formValues.amountTokens}
      />
    </form>
  );
};

export interface RepayFormProps {
  asset: Asset;
  pool: Pool;
  onCloseModal: () => void;
}

const RepayForm: React.FC<RepayFormProps> = ({ asset, pool, onCloseModal }) => {
  const { accountAddress } = useAuth();

  const [formValues, setFormValues] = useState<FormValues>({
    amountTokens: "",
    fromToken: asset.vToken.underlyingToken,
    fixedRepayPercentage: undefined,
  });

  const { mutateAsync: onRepay, isLoading: isRepayLoading } = useRepay({
    vToken: asset.vToken,
  });

  //const { mutateAsync: onSwapAndRepay, isLoading: isSwapAndRepayLoading } = useSwapTokensAndRepay({
  //poolComptrollerAddress: pool.comptrollerAddress,
  //vToken: asset.vToken,
  //});

  //const isSubmitting = isRepayLoading || isSwapAndRepayLoading;
  const isSubmitting = isRepayLoading;

  const { data: tokenBalances } = useGetSwapTokenUserBalances(
    {
      accountAddress,
    },
    {
      enabled: isFeatureEnabled("integratedSwap"),
    }
  );

  const onSubmit: RepayFormUiProps["onSubmit"] = async ({
    toVToken,
    fromToken,
    fromTokenAmountTokens,
    swap,
    fixedRepayPercentage,
  }) => {
    const isSwapping = !areTokensEqual(fromToken, toVToken.underlyingToken);
    const isRepayingFullLoan = fixedRepayPercentage === 100;

    // Handle repay flow
    if (!isSwapping) {
      const amountWei = convertTokensToWei({
        value: new BigNumber(fromTokenAmountTokens.trim()),
        token: fromToken,
      });

      return onRepay({
        isRepayingFullLoan,
        amountWei,
      });
    }

    // Throw an error if we're meant to execute a swap but no swap was
    // passed through props. This should never happen since the form is
    // disabled while swap infos are being fetched, but we add this logic
    // as a safeguard
    if (!swap) {
      throw new VError({ type: "unexpected", code: "somethingWentWrong" });
    }

    // Handle swap and repay flow
    return onSwapAndRepay({
      isRepayingFullLoan,
      swap,
    });
  };

  const swapDirection = formValues.fixedRepayPercentage
    ? "exactAmountOut"
    : "exactAmountIn";

  //const swapInfo = useGetSwapInfo({
  //fromToken: formValues.fromToken || asset.vToken.underlyingToken,
  //fromTokenAmountTokens: swapDirection === 'exactAmountIn' ? formValues.amountTokens : undefined,
  //toToken: asset.vToken.underlyingToken,
  //toTokenAmountTokens: formValues.fixedRepayPercentage
  //? calculatePercentageOfUserBorrowBalance({
  //token: asset.vToken.underlyingToken,
  //userBorrowBalanceTokens: asset.userBorrowBalanceTokens,
  //percentage: formValues.fixedRepayPercentage,
  //})
  //: undefined,
  //direction: swapDirection,
  //});

  //return (
  //<RepayFormUi
  //asset={asset}
  //pool={pool}
  //formValues={formValues}
  //setFormValues={setFormValues}
  //onCloseModal={onCloseModal}
  //tokenBalances={tokenBalances}
  //onSubmit={onSubmit}
  //isSubmitting={isSubmitting}
  //swap={swapInfo.swap}
  //swapError={swapInfo.error}
  //isSwapLoading={swapInfo.isLoading}
  ///>
  //);
  return (
    <RepayFormUi
      asset={asset}
      pool={pool}
      formValues={formValues}
      setFormValues={setFormValues}
      onCloseModal={onCloseModal}
      tokenBalances={tokenBalances}
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
    />
  );
};

export default RepayForm;
