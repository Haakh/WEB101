import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import App from './App';
import counter from './reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import middle fr/om './middle';

const store=createStore(counter,applyMiddleware(thunk, logger()));
ReactDOM.render(
  <Provider store={store}>
  <App  />
  </Provider>,
  document.getElementById('root')
);
