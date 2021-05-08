import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import Router from './router/index';
import configureStore from './redux/store';
import GlobalStyle from './style';

const { store } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle />
      <Router />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
