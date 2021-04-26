import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage';

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
