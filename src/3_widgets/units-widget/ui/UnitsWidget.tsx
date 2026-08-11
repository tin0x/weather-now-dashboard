import React from 'react';
import { SelectUnits } from '@entities/units';
import { ChangeModeButton } from '@features/change-mode-button';
import { InchesButton, MillimetersButton } from '@features/change-precipitation';
import { CelsiusButton, FahrenheitButton } from '@features/change-temperature';
import { KmhButton, MphButton } from '@features/change-wind-speed';

const UnitsWidget: React.FC = () => {
  return (
    <SelectUnits
      ModeButton={ChangeModeButton}
      CelsiusButton={CelsiusButton}
      FahrenheitButton={FahrenheitButton}
      KmhButton={KmhButton}
      MphButton={MphButton}
      MillimetersButton={MillimetersButton}
      InchesButton={InchesButton}
    />
  );
};

export default UnitsWidget;
