import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import analytics from './utils/analytics';

// Store
import { configureStore } from './store';
const store = configureStore();

import './index.css';
import App from './App';

const trackingId = 'UA-124925724-1';
analytics.init(trackingId);

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

render(<ReduxApp />, document.getElementById('app'));
