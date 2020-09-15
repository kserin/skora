import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, Switch } from "react-router-dom";
import { GirlsListPageComponent as GirlsListPageComponent } from "./components/GirlsListPage";
import "./custom.scss";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" children={<GirlsListPageComponent />} />
    </Switch>
  </Router>,
  document.getElementById("main"),
);
