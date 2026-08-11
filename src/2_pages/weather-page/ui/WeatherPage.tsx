import React from 'react';
import Container from '@shared/ui/other/container/Container.tsx';
import { useFetchWeather } from '@pages/weather-page/model/useFetchWeather.ts';
import classes from '@pages/weather-page/ui/WeatherPage.module.scss';
import SkeletonInfoWeather from '@shared/ui/other/skeletons/skeleton-weather/ui/SkeletonInfoWeather.tsx';
import { useCleaningURL } from '@pages/weather-page/model/useCleaningURL.ts';
import { ErrorWeatherWidget } from '@widgets/error-weather-widget';
import { HeroWidget } from '@widgets/hero-widget';
import { WeatherBannerWidget } from '@widgets/weather-banner-widget';
import { WeatherStatWidget } from '@widgets/weather-stat-widget';
import { DailyForecastWidget } from '@widgets/daily-forecast-widget';
import { HourlyForecastWidget } from '@widgets/hourly-forecast-widget';

const WeatherPage: React.FC = () => {
  const { mappedWeather, mappedGeolocation, weatherError, isWeatherLoading, isGeolocationLoading, isSearchResultCity } =
    useFetchWeather();

  useCleaningURL();

  const isLoading = isWeatherLoading || isGeolocationLoading;
  const hasActualError = weatherError || (!isLoading && (!mappedWeather || !mappedGeolocation));

  const renderContent = () => {
    if (isLoading && !mappedWeather && !weatherError) {
      return (
        <>
          <HeroWidget />
          <SkeletonInfoWeather />
        </>
      );
    }

    if (hasActualError) {
      return <ErrorWeatherWidget />;
    }

    if (!mappedWeather || !mappedGeolocation) return null;

    const { current, hourly, daily } = mappedWeather || {};
    const { country, city } = mappedGeolocation || {};

    return (
      <>
        <HeroWidget />
        {!isSearchResultCity ? (
          <span className={classes.weatherPageTextInfo}>No search result found!</span>
        ) : (
          <div className={classes.weatherPageInfo}>
            <div className={classes.weatherPageInfoWrapper}>
              <div className={classes.weatherPageInfoLeftSide}>
                <WeatherBannerWidget {...current} country={country} city={city} />
                <WeatherStatWidget {...current} />
                <DailyForecastWidget daily={daily} />
              </div>

              <div className={classes.weatherPageInfoRightSide}>
                <HourlyForecastWidget hourly={hourly} daily={daily} />
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <section className={classes.weatherPage}>
      <Container>
        <div className={classes.weatherPageWrapper}>{renderContent()}</div>
      </Container>
    </section>
  );
};

export default WeatherPage;
