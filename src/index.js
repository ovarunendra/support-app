import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Store
import { configureStore } from './store'
const store = configureStore()

import './index.css';
import App from './App';

const ReduxApp = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
} 

render(
  <ReduxApp/>,
  document.getElementById('app')
);
