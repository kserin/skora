import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, Switch } from "react-router-dom";
import { GirlsListPageComponent as GirlsListPageComponent } from "./components/GirlsListPage";
import { NavbarComponent } from "./components/NavbarComponent";
import { QuestionPageComponent } from "./components/QuestionPageComponent";
import "./custom.scss";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <section id="navbar">
      <NavbarComponent />
    </section>
    <section className="section" id="main">
      <Switch>
        <Route exact path="/" children={<GirlsListPageComponent />} />
        <Route exact path="/questions" children={<QuestionPageComponent />} />
      </Switch>
    </section>
  </Router>,
  document.getElementsByTagName("body")[0],
);
