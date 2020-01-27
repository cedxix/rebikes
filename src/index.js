import './styles/style.css';
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const isProductionMode = process.env.NODE_ENV === 'production';
const shouldEnableReduxDevTools =
  !isProductionMode && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = shouldEnableReduxDevTools
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })
  : compose;

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancers = [applyMiddleware(...middlewares)];
const store = createStore(reducers, {}, composeEnhancers(...enhancers));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
