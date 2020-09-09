import "./custom.scss";
import { createBrowserHistory, History } from "history";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import React from "react";
import { QuestionPageComponent } from "./components/QuestionPageComponent";
import { GirlsListPageComponent as GirlsListPageComponent } from "./components/GirlsListPage";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" children={<GirlsListPageComponent />} />
    </Switch>
  </Router>,
  document.getElementById("main")
);
