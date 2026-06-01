import React from 'react';
import StatItem from '@entities/weather/ui/stat-item/StatItem.tsx';
import type { MappedCurrentForecast } from '@entities/weather/types.ts';
import classes from '@widgets/weather-stat-widget/ui/WeatherStatWidget.module.scss';
import { formatPrecipitation, formatTemp, formatWind } from '@entities/weather/model/utils/convertWeather.ts';
import { useSelector } from 'react-redux';
import { getPrecipitationUnit, getTemperatureUnit, getWindSpeedUnit } from '@entities/units/model/selectors.ts';

const WeatherStatWidget: React.FC<MappedCurrentForecast> = ({ wind, humidity, feelsLike, precipitation }) => {
  const temperatureInit = useSelector(getTemperatureUnit);
  const windSpeedUnit = useSelector(getWindSpeedUnit);
  const precipitationUnit = useSelector(getPrecipitationUnit);

  const stats = [
    { name: 'Feels Like', value: formatTemp(feelsLike, temperatureInit) },
    { name: 'Humidity', value: `${humidity.toFixed()}%` },
    { name: 'Wind', value: formatWind(wind, windSpeedUnit) },
    {
      name: 'Precipitation',
      value: formatPrecipitation(precipitation, precipitationUnit),
    },
  ];

  return (
    <div className={classes.weatherStatWidget}>
      <div className="weatherStatWidgetWrapper">
        <ul className={classes.weatherStatWidgetList}>
          {stats.map((stat) => (
            <li className="weatherStatWidgetItem" key={stat.name}>
              <StatItem label={stat.name} value={stat.value} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeatherStatWidget;
