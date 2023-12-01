/** @jsxImportSource @emotion/react */
import { Typography } from '@mui/material';
import Switch from '@mui/material/Switch';
import { SwitchBaseProps } from '@mui/material/internal/SwitchBase';
import React from 'react';

import { InfoIcon } from '../InfoIcon';
import { useStyles } from './styles';

const generateRandomString = (length: number)=> {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export interface ToggleProps {
  onChange: SwitchBaseProps['onChange'];
  value: boolean;
  className?: string;
  isLight?: boolean;
  label?: string;
  tooltip?: string;
}

export const switchAriaLabel = 'Switch';
const otherSwitchProps = { inputProps: { 'aria-label': switchAriaLabel } };

export const Toggle = ({
  onChange,
  value,
  className,
  isLight = false,
  label,
  tooltip,
}: ToggleProps) => {
  const styles = useStyles();

  return (
    <div css={styles.container} className={className}>
      {!!tooltip && <InfoIcon css={styles.infoIcon} tooltip={tooltip} />}

      {!!label && (
        <Typography color="text.primary" variant="small1" component="span" css={styles.label}>
          {label}
        </Typography>
      )}

      <Switch
        name={`switch_toggle_${generateRandomString(10)}`}
        css={styles.getSwitch({ isLight })}
        focusVisibleClassName=".Mui-focusVisible"
        disableRipple
        onChange={onChange}
        checked={value}
        {...otherSwitchProps}
      />
    </div>
  );
};
