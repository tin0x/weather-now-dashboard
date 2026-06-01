import React from 'react';
import IconCheck from '@shared/ui/icons/icon-check/IconCheck.tsx';
import classes from '@shared/ui/other/select/select-option/SelectOption.module.scss';
import type { SelectOptionProps } from '@shared/ui/other/select/select-option/types.ts';

const SelectOption: React.FC<SelectOptionProps> = ({ label, isActive, onClick }) => {
  return (
    <button className={classes.selectOptionButton} onClick={onClick} type="button">
      <span>{label}</span>
      {isActive && <IconCheck size="1.2rem" />}
    </button>
  );
};

export default SelectOption;
