import React from 'react';
import SelectOption from '@shared/ui/other/select/select-option/SelectOption.tsx';
import { useGetTemperatureUnit } from '@features/change-units/change-temperature/model/useGetTemperatureUnit.ts';

const CelsiusButton: React.FC = () => {
  const { temperature, changeTemperatureFormat } = useGetTemperatureUnit();

  return <SelectOption label="Celsius (°C)" isActive={temperature === 'celsius'} onClick={changeTemperatureFormat} />;
};

export default CelsiusButton;
