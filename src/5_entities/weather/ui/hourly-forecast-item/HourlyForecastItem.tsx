import React from 'react';
import Card from '@shared/ui/other/card/Card.tsx';
import type { HourlyForecastItemProps } from '@entities/weather/types.ts';
import classes from '@entities/weather/ui/hourly-forecast-item/HourlyForecastItem.module.scss';
import clsx from 'clsx';

const HourlyForecastItem: React.FC<HourlyForecastItemProps> = ({ icon, isNight, hour, temp }) => {
  return (
    <Card className={classes.hourlyForecastItem} background={'secondary'} isBorder>
      <div className={classes.hourlyForecastItemWrapper}>
        <div className={classes.hourlyForecastItemBlock}>
          <img
            className={clsx(classes.hourlyForecastItemIcon, {
              [classes.hourlyForecastItemIconSmalled]: isNight,
            })}
            src={icon}
            alt="weather-icon"
          />
          <span className={classes.hourlyForecastItemHour}>{hour}</span>
        </div>
        <span className="hourlyForecastItemTemperature">{temp}</span>
      </div>
    </Card>
  );
};

export default HourlyForecastItem;
