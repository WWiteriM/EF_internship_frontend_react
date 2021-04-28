import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Registration';
import { AlbumPage, AlbumInfoPage } from '../pages/Albums/index';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/registration" component={RegisterPage} />
          <Route path="/albums" component={AlbumPage} exact />
          <Route path="/albums/:id" component={AlbumInfoPage} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
