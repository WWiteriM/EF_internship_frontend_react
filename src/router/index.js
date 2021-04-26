import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Registration';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/registration">
            <RegisterPage />
          </Route>
          <Route path="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
