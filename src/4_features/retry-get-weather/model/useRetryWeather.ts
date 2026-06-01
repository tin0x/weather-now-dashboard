import { useFetchWeather } from '@pages/weather-page/model/useFetchWeather.ts';

export const useRetryWeather = () => {
  const { refetchAll, isWeatherLoading } = useFetchWeather();

  const handleRetryWeather = () => {
    refetchAll();
  };

  return { handleRetryWeather, isWeatherLoading };
};
