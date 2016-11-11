import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './App';
import todolist from './reducer';



const store=createStore(todolist);
ReactDOM.render(
  <Provider store={store}>
  <App  />
  </Provider>,
  document.getElementById('root')
);
