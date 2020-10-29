import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, Switch } from "react-router-dom";
import { GirlsListPageComponent as GirlsListPageComponent } from "./components/GirlsListPage";
import { NavbarComponent } from "./components/NavbarComponent";
import { QuestionFormPageComponent } from "./components/QuestionFormPageComponent";
import { QuestionsListPageComponent } from "./components/QuestionsListPageComponent";
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
        <Route exact path="/questions" children={<QuestionsListPageComponent />} />
        <Route exact path="/add" children={<QuestionFormPageComponent />} />
      </Switch>
    </section>
  </Router>,
  document.getElementsByTagName("body")[0],
);
