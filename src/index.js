import './styles/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import reducers from './reducers';

const isProductionMode = process.env.NODE_ENV !== 'production';
const shouldEnableReduxDevTools = !isProductionMode && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(
  reducers,
  shouldEnableReduxDevTools ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false }) : compose,
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
