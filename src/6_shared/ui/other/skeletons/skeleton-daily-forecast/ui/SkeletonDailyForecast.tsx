import React from 'react';
import classes from '@shared/ui/other/skeletons/skeleton-daily-forecast/ui/SkeletonDailyForecast.module.scss';
import SkeletonCard from '@shared/ui/other/skeletons/skeleton-card/SkeletonCard.tsx';

const SkeletonDailyForecast: React.FC = () => {
  const LENGTH_ARRAY = 7;

  return (
    <div className={classes.skeletonDailyForecast}>
      <div className={classes.skeletonDailyForecastWrapper}>
        <h4 className={classes.skeletonDailyForecastTitle}>Daily forecast</h4>
        <ul className={classes.skeletonDailyForecastList}>
          {Array.from({ length: LENGTH_ARRAY }, (_, i) => (
            <li className="skeletonDailyForecastWidgetItem" key={i}>
              <SkeletonCard className={classes.skeletonDailyForecastItemCard} background={'primary'} isBorder />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkeletonDailyForecast;
