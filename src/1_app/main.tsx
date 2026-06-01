import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@app/styles/index.scss';
import App from '@app/App.tsx';
import { withRedux } from '@app/providers/withRedux.tsx';
import { ErrorBoundary } from 'react-error-boundary';
import WeatherErrorFallback from '@shared/ui/other/weather-error-fallback/WeatherErrorFallback.tsx';

const ReduxProvider = withRedux(App);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={WeatherErrorFallback} onReset={() => window.location.reload()}>
      <ReduxProvider />
    </ErrorBoundary>
  </StrictMode>,
);
