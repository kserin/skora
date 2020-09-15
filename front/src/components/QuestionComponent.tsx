import React from "react";
import { Question } from "../domain/Question";

type QuestionComponentProps = Question;

export class QuestionComponent extends React.Component<QuestionComponentProps, {}> {
  public render() {
    const details = this.props.details ? <h2 className="question-details subtitle has-text-centered">{this.props.details}</h2> : undefined;

    const answers = this.props.answers.map((answer) => <div className="column is-3">
      <button className="answer button is-medium is-fullwidth is-primary is-outlined" style={{height: "auto"}}>
        <span style={{whiteSpace: "normal"}}>{answer}</span>
      </button>
    </div>);

    return [
      <div className="columns">
        <div className="column">
          <h1 className="question title has-text-centered">{this.props.question}</h1>
          {details}
        </div>
      </div>,
      <div className="answers columns is-centered">
        {answers}
      </div>,
    ];
  }
}
