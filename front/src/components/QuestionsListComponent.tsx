import React from "react";
import { Question, QuestionSeverity } from "../domain/Question";
import { SeverityIconComponent } from "./SeverityIconComponent";

export interface QuestionsListComponentProps {
  questions: Question[];
}

interface QuestionsListComponentState {
  currentTab?: string;
}

export class QuestionsListComponent extends React.Component<QuestionsListComponentProps, QuestionsListComponentState> {
  constructor(props: QuestionsListComponentProps) {
    super(props);
    this.onTabChange = this.onTabChange.bind(this);

    this.state = {
      currentTab: undefined,
    };
  }

  public render() {
    const tabs = <p className="panel-tabs">
      <a className={!this.state.currentTab ? "is-active" : ""} onClick={() => this.onTabChange()}>Tout</a>
      {this.extractCategories().map((category) => <a className={this.state.currentTab === category ? "is-active" : ""}
        onClick={() => this.onTabChange(category)}>{category}</a>)}
    </p>;

    const questions = this.props.questions
      .filter((question) => !this.state.currentTab || this.state.currentTab === question.category)
      .map((question) => <a href="#" className="panel-block">
        <div className="level is-mobile" style={{width: "100%"}}>
          <div className="level-left" style={{maxWidth: "80%"}}>
            <div className="level-item" style={{maxWidth: "100%", whiteSpace: "normal"}}>{question.question}</div>
          </div>
          <div className="level-right">
            <div className="level-item is-size-6 is-hidden-touch">{this.severityLabel(question.severity)}</div>
            <SeverityIconComponent severity={question.severity} />
          </div>
        </div>
      </a>);

    return (
      <nav className="panel is-size-4">
        {tabs}
        {questions}
      </nav>
    );
  }

  private severityLabel(severity: QuestionSeverity): string {
    switch (severity) {
      case QuestionSeverity.ANECDOTIC:
        return "Anecdotique";
      case QuestionSeverity.MINOR:
        return "Mineur";
      case QuestionSeverity.MAJOR:
        return "Majeur";
      case QuestionSeverity.BLOCKING:
        return "Bloquant";
    }
  }

  private extractCategories(): string[] {
    return this.props.questions
      .map((question) => question.category)
      .reduce((acc: string[], value) => {
        if (acc.indexOf(value) === -1) {
          acc.push(value);
        }
        return acc;
      }, []);
  }

  private onTabChange(newTab?: string) {
    if (this.state.currentTab !== newTab) {
      this.setState({
        currentTab: newTab,
      });
    }
  }
}
