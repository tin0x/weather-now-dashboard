import { getPrecipitationUnit, getTemperatureUnit, getWindSpeedUnit } from '@entities/units/model/selectors.ts';
import { StatItem } from '@entities/weather';
import { formatPrecipitation, formatTemp, formatWind } from '@entities/weather/lib/convertWeather';
import type { WeatherStatWidgetProps } from '@entities/weather/types';
import classes from '@widgets/weather-stat-widget/ui/WeatherStatWidget.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';

const WeatherStatWidget: React.FC<WeatherStatWidgetProps> = ({ wind, humidity, feelsLike, precipitation }) => {
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
