import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Board from './components/Board';
import configureStore from './store/configureStore.js';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <Board />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
