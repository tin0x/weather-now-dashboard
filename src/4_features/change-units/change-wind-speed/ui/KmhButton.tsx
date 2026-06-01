import React from 'react';
import SelectOption from '@shared/ui/other/select/select-option/SelectOption.tsx';
import { useGetWindSpeedUnit } from '@features/change-units/change-wind-speed/model/useGetWindSpeed.ts';

const KmhButton: React.FC = () => {
  const { windSpeedUnit, changeWindSpeedUnit } = useGetWindSpeedUnit();

  return <SelectOption label="km/h" isActive={windSpeedUnit === 'kmh'} onClick={changeWindSpeedUnit} />;
};

export default KmhButton;
