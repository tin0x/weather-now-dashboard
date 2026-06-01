import React from 'react';
import SelectOption from '@shared/ui/other/select/select-option/SelectOption.tsx';
import { useGetModeUnit } from '@features/change-units/change-mode-button/model/useGetModelUnit.ts';

const ChangeModeButton: React.FC = () => {
  const { modeUnits, changeUnitsMode } = useGetModeUnit();

  return (
    <SelectOption label={`Switch to ${modeUnits === 'imperial' ? 'Metric' : 'Imperial'}`} onClick={changeUnitsMode} />
  );
};

export default ChangeModeButton;
