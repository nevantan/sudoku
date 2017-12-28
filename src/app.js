import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import configureStore from './store/configureStore.js';
import './styles/style.scss';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <Layout />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
