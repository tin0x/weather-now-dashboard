import React from 'react';
import classes from '@shared/ui/other/skeletons/skeleton-hourly-forecast/ui/SkeletonHourlyForecast.module.scss';
import Select from '@shared/ui/other/select/Select.tsx';
import SkeletonCard from '@shared/ui/other/skeletons/skeleton-card/SkeletonCard.tsx';

const SkeletonHourlyForecast: React.FC = () => {
  const LENGTH_ARRAY = 8;

  return (
    <SkeletonCard className={classes.skeletonHourlyForecast} background={'primary'} isBorder>
      <div className={classes.skeletonHourlyForecastWrapper}>
        <div className={classes.skeletonHourlyForecastTopBar}>
          <h4 className={classes.skeletonHourlyForecastTitle}>Hourly forecast</h4>
          <Select background={'secondary'} title={'-'}></Select>
        </div>
        <ul className={classes.skeletonHourlyForecastList}>
          {Array.from({ length: LENGTH_ARRAY }).map((_, i) => (
            <li className="skeletonHourlyForecastWidgetItem" key={i}>
              <SkeletonCard className={classes.skeletonHourlyForecastItemCard} background={'secondary'} />
            </li>
          ))}
        </ul>
      </div>
    </SkeletonCard>
  );
};

export default SkeletonHourlyForecast;
