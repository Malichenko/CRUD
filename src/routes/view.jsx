// Core
import React from "react";
import { Switch, Route } from "react-router-dom";

// Routes
import { book } from "./book";

export const View = () => {
  const routesJSX = Object.values(book).map(({ url, component: Page, id }) => {
    return (
      <Route key={id} exact path={url}>
        <Page />
      </Route>
    );
  });

  return (
    <Switch>
      {routesJSX}
    </Switch>
  );
};
