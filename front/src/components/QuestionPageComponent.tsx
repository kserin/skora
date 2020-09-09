import React from "react";
import { QuestionCrumbComponent } from "./QuestionCrumbComponent";
import { PointsComponent } from "./PointsComponent";
import { QuestionComponent } from "./QuestionComponent";

export class QuestionPageComponent extends React.Component<{}, {}> {
  public render() {
    const answers = [
      "I don't know",
      "Can you repeat the question ?",
      "How are you ?",
      "No question"
    ];

    return (
      <div className="container-fluid">
        <div className="box">
          <nav className="level is-mobile">
            <div className="level-left">
              <div className="level-item">
                <QuestionCrumbComponent category="Category" personName="Alice Martin" />
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <PointsComponent points={137} />
              </div>
            </div>
          </nav>

          <QuestionComponent question="Quelle est votre question ?" details="Des détails ici" answers={answers} />

          <div className="columns">
            <div className="column is-full has-text-centered"><a href="#">Passer</a></div>
          </div>

        </div>
      </div>
    );
  }
}
