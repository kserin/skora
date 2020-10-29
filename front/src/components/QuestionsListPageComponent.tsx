import { mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { EventSubscription } from "fbemitter";
import React from "react";
import { Link } from "react-router-dom";
import { QuestionsAction } from "../actions/QuestionsAction";
import QuestionsApi from "../api/QuestionsApi";
import { Question } from "../domain/Question";
import QuestionsStore from "../stores/QuestionsStore";
import { QuestionsListComponent } from "./QuestionsListComponent";
import { SpinnerComponent } from "./SpinnerComponent";

interface QuestionsListPageComponentState {
  questions: Question[];
  loading: boolean;
  error?: string;
}

export class QuestionsListPageComponent extends React.Component<{}, QuestionsListPageComponentState> {
  private subscription: EventSubscription | undefined;

  constructor(props: {}) {
    super(props);

    this.state = {
      loading: true,
      questions: [],
    };
  }

  public render() {
    if (this.state.loading) {
      return (
        <div className="container-fluid has-text-centered">
           <SpinnerComponent />
         </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <QuestionsListComponent questions={this.state.questions} />
          <Link to="/add" className="button is-floating is-primary" style={{fontSize: "unset"}}>
            <Icon path={mdiPlus} />
          </Link>
        </div>
      );
    }
  }

  public componentDidMount() {
    this.subscription = QuestionsStore.addListener(this.onStoreChange.bind(this));
    new QuestionsAction().openPage();
    QuestionsApi.list();
  }

  public componentWillUnmount() {
    if (this.subscription) {
      this.subscription.remove();
    }
  }

  private onStoreChange() {
    const data = QuestionsStore.getState();
    this.setState({
      error: data.error,
      loading: data.loading,
      questions: data.questions,
    });
  }
}
