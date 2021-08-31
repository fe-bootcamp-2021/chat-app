import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Main/Main";
import { routes } from "../../constants/routes.constant";

function LoginRegisterForm() {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.login.url}>
          <Login />
        </Route>
        <Route path={routes.register.url}>
          <Register />
        </Route>
        <Route path={routes.home.url}>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default LoginRegisterForm;
