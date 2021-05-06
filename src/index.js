import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/index';
import GlobalStyle from './style';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
);
