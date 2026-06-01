import React from 'react';
import SelectOption from '@shared/ui/other/select/select-option/SelectOption.tsx';
import { useGetTemperatureUnit } from '@features/change-units/change-temperature/model/useGetTemperatureUnit.ts';

const FahrenheitButton: React.FC = () => {
  const { temperature, changeTemperatureFormat } = useGetTemperatureUnit();

  return (
    <SelectOption label="Fahrenheit (°F)" isActive={temperature === 'fahrenheit'} onClick={changeTemperatureFormat} />
  );
};

export default FahrenheitButton;
