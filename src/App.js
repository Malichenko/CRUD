// Core
import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter as Router } from "connected-react-router";

// Routes
import { Routes } from "./routes";

// Other
import { history } from "./init/middleware";
import { store } from "./init/store";

export const App = () => {
  return (
    <Provider store={store}>
      <Router history={history} >
        <Routes />
      </Router>
    </Provider>
  );
};
