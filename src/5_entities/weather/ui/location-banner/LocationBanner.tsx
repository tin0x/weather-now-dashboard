import React from 'react';
import Card from '@shared/ui/other/card/Card.tsx';
import type { LocationBannerProps } from '@entities/weather/types.ts';
import classes from '@entities/weather/ui/location-banner/LocationBanner.module.scss';
import bgImage from '@shared/assets/images/bg-today-large.svg';
import clsx from 'clsx';

const LocationBanner: React.FC<LocationBannerProps> = ({ icon, city, country, date, temp, isDay }) => {
  return (
    <Card style={{ '--banner-bg': `url(${bgImage})` } as React.CSSProperties}>
      <div className={classes.locationBanner}>
        <div className={classes.locationBannerGeolocationBlock}>
          <h2 className="locationBannerTitle">{`${city}, ${country}`}</h2>
          <p className="locationBannerDate">{date}</p>
        </div>
        <div className={classes.locationBannerTemperatureBlock}>
          <img
            className={clsx(classes.locationBannerIcon, {
              [classes.locationBannerIconSmalled]: !isDay,
            })}
            src={icon}
            alt="weather"
          />
          <span className="locationBannerTemperature">{temp}</span>
        </div>
      </div>
    </Card>
  );
};

export default LocationBanner;
