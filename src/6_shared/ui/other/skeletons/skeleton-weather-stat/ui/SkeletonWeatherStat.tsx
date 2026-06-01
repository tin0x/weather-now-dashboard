import React from 'react';
import classes from '@shared/ui/other/skeletons/skeleton-weather-stat/ui/SkeletonWeatherStat.module.scss';
import SkeletonCard from '../../skeleton-card/SkeletonCard';

const SkeletonWeatherStat: React.FC<{
  background?: 'primary' | 'secondary';
}> = ({ background }) => {
  const statItems = [
    { label: 'Feels Like', value: '_' },
    { label: 'Humidity', value: '_' },
    { label: 'Wind', value: '_' },
    { label: 'Precipitation', value: '_' },
  ];

  return (
    <div className={classes.skeletonWeatherStat}>
      <div className="skeletonWeatherStatWrapper">
        <ul className={classes.skeletonWeatherStatList}>
          {statItems.map((item, i) => (
            <li className="skeletonWeatherStatWidgetItem" key={i}>
              <SkeletonCard className={classes.skeletonWeatherStatItemCard} background={background} isBorder>
                <span className={classes.skeletonWeatherStatLabel}>{item.label}</span>
                <span className={classes.skeletonWeatherStatValue}>{item.value}</span>
              </SkeletonCard>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkeletonWeatherStat;
