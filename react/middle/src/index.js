import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware, combineReducers} from 'redux';
import App from './App';
import todos from './reducer';
import loading from './load';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import middle from './middle';

const x = combineReducers({
  todored: todos,
  loadred: loading
});

const store=createStore(x,applyMiddleware(thunk, logger()));
ReactDOM.render(
  <Provider store={store}>
  <App  />
  </Provider>,
  document.getElementById('root')
);
