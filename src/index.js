import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
const store = createStore(rootReducer)
import './index.css';
import App from './App';

const ReduxApp = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
} 

ReactDOM.render(
  <ReduxApp/>,
  document.getElementById('app')
);
