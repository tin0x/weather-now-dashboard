import classes from '@shared/ui/other/weather-error-fallback/WeatherErrorFallback.module.scss';
import Button from '@shared/ui/other/button/Button.tsx';
import type { FallbackProps } from 'react-error-boundary';

const WeatherErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <div className={classes.weatherErrorFallback}>
      <div className={classes.weatherErrorFallbackWrapper}>
        <h2 className={classes.weatherErrorFallbackTitle}>Oops! Something went wrong with the forecast.</h2>
        <p className={classes.weatherErrorFallbackText}>An unexpected error occurred while rendering data.</p>
        <Button className={classes.weatherErrorFallbackButton} onClick={resetErrorBoundary} color="primary">
          Try again
        </Button>
      </div>
    </div>
  );
};

export default WeatherErrorFallback;
