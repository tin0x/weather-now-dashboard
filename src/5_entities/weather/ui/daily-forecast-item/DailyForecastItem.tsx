import React from 'react';
import classes from '@entities/weather/ui/daily-forecast-item/DailyForecastItem.module.scss';
import type { DailyForecastItemProps } from '@entities/weather/types.ts';
import Card from '@shared/ui/other/card/Card';

const DailyForecastItem: React.FC<DailyForecastItemProps> = ({ day, icon, maxTemp, minTemp }) => {
  return (
    <Card background={'primary'}>
      <div className={classes.dailyForecastItemWrapper}>
        <span className="dailyForecastItemLabel">{day}</span>
        <img className={classes.dailyForecastItemIcon} src={icon} alt="weather-icon" />
        <div className={classes.dailyForecastItemTempBlock}>
          <span>{maxTemp}</span>
          <span>{minTemp}</span>
        </div>
      </div>
    </Card>
  );
};

export default DailyForecastItem;
