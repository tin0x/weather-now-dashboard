import React from 'react';
import SelectOption from '@shared/ui/other/select/select-option/SelectOption.tsx';
import { useGetWindSpeedUnit } from '@features/change-units/change-wind-speed/model/useGetWindSpeed.ts';

const MphButton: React.FC = () => {
  const { windSpeedUnit, changeWindSpeedUnit } = useGetWindSpeedUnit();

  return <SelectOption label="mph" isActive={windSpeedUnit === 'mph'} onClick={changeWindSpeedUnit} />;
};

export default MphButton;
