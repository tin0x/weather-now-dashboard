import React from 'react';
import classes from '@shared/ui/other/skeletons/skeleton-weather-banner/ui/SkeletonWeatherBanner.module.scss';
import SkeletonCard from '../../skeleton-card/SkeletonCard';

const SkeletonWeatherBanner: React.FC<{
  background?: 'primary' | 'secondary';
}> = ({ background }) => {
  return (
    <SkeletonCard className={classes.skeletonWeatherBanner} background={background} isBorder>
      <span className={classes.skeletonWeatherBannerLoader}>Loading...</span>
    </SkeletonCard>
  );
};

export default SkeletonWeatherBanner;
