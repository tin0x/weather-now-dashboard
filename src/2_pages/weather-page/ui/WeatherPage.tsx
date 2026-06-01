import React from 'react';
import Container from '@shared/ui/other/container/Container.tsx';
import HeroWidget from '@widgets/hero-widget/ui/HeroWidget.tsx';
import { useFetchWeather } from '@pages/weather-page/model/useFetchWeather.ts';
import classes from '@pages/weather-page/ui/WeatherPage.module.scss';

import ErrorWeatherWidget from '@widgets/error-weather-widget/ui/ErrorWeatherWidget.tsx';
import InfoWeatherWidget from '@widgets/info-weather-widget/ui/InfoWeatherWidget.tsx';
import SkeletonInfoWeather from '@shared/ui/other/skeletons/skeleton-weather/ui/SkeletonInfoWeather.tsx';

const WeatherPage: React.FC = () => {
  const { mappedWeather, mappedGeolocation, weatherError, isWeatherLoading, isGeolocationLoading, isSearchResultCity } =
    useFetchWeather();

  const isLoading = isWeatherLoading || isGeolocationLoading;
  const hasActualError = weatherError || (!isLoading && (!mappedWeather || !mappedGeolocation));

  if (isLoading && !mappedWeather && !weatherError) {
    return (
      <section className={classes.weatherPage}>
        <Container style={{ height: '100%' }}>
          <div className={classes.weatherPageWrapper}>
            <HeroWidget />
            <SkeletonInfoWeather />
          </div>
        </Container>
      </section>
    );
  }

  if (hasActualError) {
    return (
      <section className={classes.weatherPage}>
        <Container style={{ height: '100%' }}>
          <div className={classes.weatherPageWrapper}>
            <ErrorWeatherWidget />
          </div>
        </Container>
      </section>
    );
  }

  if (!mappedWeather || !mappedGeolocation) return null;

  const { current, hourly, daily } = mappedWeather || {};
  const { country, city } = mappedGeolocation || {};

  return (
    <section className={classes.weatherPage}>
      <Container style={{ height: '100%' }}>
        <div className={classes.weatherPageWrapper}>
          <HeroWidget />
          {!isSearchResultCity ? (
            <span className={classes.weatherPageTextInfo}>No search result found!</span>
          ) : (
            <InfoWeatherWidget country={country} city={city} current={current} hourly={hourly} daily={daily} />
          )}
        </div>
      </Container>
    </section>
  );
};

export default WeatherPage;
