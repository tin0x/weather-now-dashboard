import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@app/styles/index.scss';
import App from '@app/App.tsx';
import { ReduxProvider } from '@app/providers/ReduxProvider.tsx';
import { ErrorBoundary } from 'react-error-boundary';
import WeatherErrorFallback from '@shared/ui/other/weather-error-fallback/WeatherErrorFallback.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={WeatherErrorFallback} onReset={() => window.location.reload()}>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </ErrorBoundary>
  </StrictMode>,
);
