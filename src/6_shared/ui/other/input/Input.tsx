import React from 'react';
import type { InputProps } from '@shared/ui/other/input/types.ts';
import classes from '@shared/ui/other/input/Input.module.scss';

const Input: React.FC<InputProps> = ({ Icon, children, ...rest }) => {
  return (
    <div className={classes.inputWrapper}>
      <input className={`${classes.inputElement} ${Icon && classes.inputElementWithIcon}`} type="text" {...rest} />
      {Icon && (
        <span className={classes.inputIcon}>
          <Icon size="1.2rem" />
        </span>
      )}
      {children}
    </div>
  );
};

export default Input;
