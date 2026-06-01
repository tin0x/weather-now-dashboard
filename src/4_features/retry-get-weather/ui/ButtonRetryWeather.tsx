import React from 'react';
import Button from '@shared/ui/other/button/Button.tsx';
import IconReload from '@shared/ui/icons/icon-reload/IconReload.tsx';
import classes from '@features/retry-get-weather/ui/ButtonRetryWeather.module.scss';
import { useRetryWeather } from '@features/retry-get-weather/model/useRetryWeather.ts';

const ButtonRetryWeather: React.FC = () => {
  const { handleRetryWeather, isWeatherLoading } = useRetryWeather();

  return (
    <Button className={classes.buttonRetryWeather} color={'secondary'} onClick={handleRetryWeather}>
      <IconReload className="buttonRetryWeatherIcon" size={'1rem'} isLoading={isWeatherLoading} />
      <span className="butttonRetryLabel">Retry</span>
    </Button>
  );
};

export default ButtonRetryWeather;
