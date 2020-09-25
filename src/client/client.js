/* eslint-disable no-underscore-dangle */
// Startup point for client-side application

import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import reducers from './reducers';
import Routes from './Routes';
import history from './history';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';

const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(reducers, state, applyMiddleware(thunk));

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  ReactDOM.hydrate(
    <Provider store={store}>
      <Router history={history}>
        <div>{renderRoutes(Routes)}</div>
      </Router>
    </Provider>,
    document.querySelector('#root')
  );
}
