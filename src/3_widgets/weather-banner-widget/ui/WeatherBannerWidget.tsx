import React from 'react';
import LocationBanner from '@entities/weather/ui/location-banner/LocationBanner.tsx';
import type { CurrentForecast } from '@entities/weather/types.ts';
import { getIconByCode } from '@entities/weather/model/utils/getIconByCode.ts';
import { useSelector } from 'react-redux';
import { getTemperatureUnit } from '@entities/units/model/selectors.ts';
import { formatTemp } from '@entities/weather/model/utils/convertWeather.ts';
import iconMoon from '@shared/assets/images/moon-icon.webp';

const WeatherBannerWidget: React.FC<CurrentForecast> = ({ country, city, date, temp, icon, isDay }) => {
  const temperatureUnit = useSelector(getTemperatureUnit);

  return (
    <LocationBanner
      isDay={isDay}
      icon={isDay ? getIconByCode(icon) : iconMoon}
      city={city}
      country={country}
      date={date}
      temp={formatTemp(temp, temperatureUnit)}
    />
  );
};

export default WeatherBannerWidget;
