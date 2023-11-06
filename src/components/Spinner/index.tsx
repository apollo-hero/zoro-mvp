/** @jsxImportSource @emotion/react */
import { Spinner as SpinnerAnimation } from "../LottieAnimation";
import { useStyles } from "./styles";
import TEST_IDS from "./testIds";
import React from "react";

interface SpinnerProps {
  variant?: "large" | "small";
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  variant = "large",
  className,
}) => {
  const styles = useStyles({ variant });

  return (
    <div
      css={styles.container}
      className={`custom-loader ${className}`}
      data-testid={TEST_IDS.spinner}
    >
      <SpinnerAnimation css={styles.spinner} />
    </div>
  );
};
