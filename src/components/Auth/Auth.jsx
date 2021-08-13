import React from 'react';
import './Auth.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function LoginRegisterForm() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default LoginRegisterForm;
