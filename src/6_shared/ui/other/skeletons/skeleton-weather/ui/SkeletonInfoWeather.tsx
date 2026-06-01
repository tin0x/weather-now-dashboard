import React from 'react';
import classes from '@shared/ui/other/skeletons/skeleton-weather/ui/SkeletonInfoWeather.module.scss';
import SkeletonDailyForecast from '@shared/ui/other/skeletons/skeleton-daily-forecast/ui/SkeletonDailyForecast.tsx';
import SkeletonWeatherStat from '@shared/ui/other/skeletons/skeleton-weather-stat/ui/SkeletonWeatherStat.tsx';
import SkeletonWeatherBanner from '@shared/ui/other/skeletons/skeleton-weather-banner/ui/SkeletonWeatherBanner.tsx';
import SkeletonHourlyForecast from '@shared/ui/other/skeletons/skeleton-hourly-forecast/ui/SkeletonHourlyForecast.tsx';

const SkeletonInfoWeather: React.FC = () => {
  return (
    <div className={classes.skeletonInfoWeather}>
      <div className={classes.skeletonInfoWeatherWrapper}>
        <div className={classes.skeletonInfoWeatherLeftSide}>
          <SkeletonWeatherBanner background={'primary'} />
          <SkeletonWeatherStat background={'primary'} />
          <SkeletonDailyForecast />
        </div>
        <div className={classes.skeletonInfoWeatherRightSide}>
          <SkeletonHourlyForecast />
        </div>
      </div>
    </div>
  );
};

export default SkeletonInfoWeather;
