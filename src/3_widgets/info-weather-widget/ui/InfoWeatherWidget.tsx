import React from 'react';
import type { InfoWeatherWidgetProps } from '@widgets/info-weather-widget/types.ts';
import classes from '@widgets/info-weather-widget/ui/InfoWeather.module.scss';
import { DailyForecastWidget } from '@widgets/daily-forecast-widget';
import { HourlyForecastWidget } from '@widgets/hourly-forecast-widget';
import { WeatherBannerWidget } from '@widgets/weather-banner-widget';
import { WeatherStatWidget } from '@widgets/weather-stat-widget';

const InfoWeatherWidget: React.FC<InfoWeatherWidgetProps> = ({ country, city, current, hourly, daily }) => {
  return (
    <div className={classes.infoWeatherWidget}>
      <div className={classes.infoWeatherWidgetWrapper}>
        <div className={classes.infoWeatherWidgetLeftSide}>
          <WeatherBannerWidget {...current} country={country} city={city} />
          <WeatherStatWidget {...current} />
          <DailyForecastWidget daily={daily} />
        </div>

        <div className={classes.infoWeatherWidgetRightSide}>
          <HourlyForecastWidget hourly={hourly} daily={daily} />
        </div>
      </div>
    </div>
  );
};

export default InfoWeatherWidget;
