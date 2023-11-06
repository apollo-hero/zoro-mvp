/** @jsxImportSource @emotion/react */
import { TertiaryButton } from "../Button";
import useStyles from "./styles";
import React from "react";

export interface ButtonGroupProps {
  buttonLabels: string[];
  activeButtonIndex: number;
  onButtonClick: (newIndex: number) => void;
  fullWidth?: boolean;
  className?: string;
  buttonClassName?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttonLabels,
  activeButtonIndex = 0,
  onButtonClick,
  fullWidth = false,
  className,
  buttonClassName,
}) => {
  const styles = useStyles();

  return (
    <div css={styles.getContainer({ fullWidth })} className={className}>
      {buttonLabels.map((label, index) => (
        <TertiaryButton
          key={`button-group-button-${label}`}
          onClick={() => onButtonClick(index)}
          css={styles.getButton({
            active: index === activeButtonIndex,
            last: index === buttonLabels.length - 1,
            fullWidth,
          })}
          className={`${buttonClassName} ${
            index === activeButtonIndex && "active"
          }`}
        >
          {label}
        </TertiaryButton>
      ))}
    </div>
  );
};
