import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducerTodo from './reducer';

ReactDOM.render(
  <Provider store={createStore(reducerTodo)} >
  <App />
  </Provider>,
  document.getElementById('root')
)
