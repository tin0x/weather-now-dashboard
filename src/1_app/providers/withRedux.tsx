import { Provider } from 'react-redux';
import React from 'react';
import { store } from '@app/store/store.ts';

export const withRedux = (Component: React.ComponentType) => () => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};
