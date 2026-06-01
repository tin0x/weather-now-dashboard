import React from 'react';
import Select from '@shared/ui/other/select/Select.tsx';
import Icon from '@shared/ui/icons/icon-setting/IconSetting.tsx';
import classes from '@entities/units/ui/SelectUnits.module.scss';
import type { SelectUnitsProps } from '@entities/units/types.ts';

const SelectUnits: React.FC<SelectUnitsProps> = ({
  ModeButton,
  CelsiusButton,
  FahrenheitButton,
  KmhButton,
  MphButton,
  MillimetersButton,
  InchesButton,
}) => {
  return (
    <Select background={'primary'} Icon={Icon} title="Units">
      <li className={classes.selectUnitsItem}>
        <ModeButton />
      </li>
      <li className={classes.selectUnitsItem}>
        <hr className={classes.selectUnitsLine} />
        <span className={classes.selectUnitsTitle}>Temperature</span>
        <div className={classes.selectUnitsSection}>
          <CelsiusButton />
          <FahrenheitButton />
        </div>
      </li>
      <li className={classes.selectUnitsItem}>
        <hr className={classes.selectUnitsLine} />
        <span className={classes.selectUnitsTitle}>Wind Speed</span>
        <div className={classes.selectUnitsSection}>
          <KmhButton />
          <MphButton />
        </div>
      </li>
      <li className={classes.selectUnitsItem}>
        <hr className={classes.selectUnitsLine} />
        <span className={classes.selectUnitsTitle}>Precipitation</span>
        <div className={classes.selectUnitsSection}>
          <MillimetersButton />
          <InchesButton />
        </div>
      </li>
    </Select>
  );
};

export default SelectUnits;
