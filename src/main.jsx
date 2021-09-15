import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { App } from "./App";
import { ProvideAuth } from "./hooks/useAuth.hook";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ProvideAuth>
      <Router>
        <App />
      </Router>
    </ProvideAuth>
  </React.StrictMode>,
  document.getElementById("root")
);
