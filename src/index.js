import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './style';
import Router from './router/index';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
);
