import React from 'react';
import SelectUnits from '@entities/units/ui/SelectUnits.tsx';
import ChangeModeButton from '@features/change-units/change-mode-button/ui/ChangeModeButton.tsx';
import CelsiusButton from '@features/change-units/change-temperature/ui/CelsiusButton.tsx';
import FahrenheitButton from '@features/change-units/change-temperature/ui/FahrenheitButton.tsx';
import KmhButton from '@features/change-units/change-wind-speed/ui/KmhButton.tsx';
import MphButton from '@features/change-units/change-wind-speed/ui/MphButton.tsx';
import MillimetersButton from '@features/change-units/change-precipitation/ui/MillimetersButton.tsx';
import InchesButton from '@features/change-units/change-precipitation/ui/InchesButton.tsx';

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
