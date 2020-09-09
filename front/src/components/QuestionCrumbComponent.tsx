import React from "react";

export interface QuestionCrumbComponentProps {
  category: string;
  personName: string;
}

export class QuestionCrumbComponent extends React.Component<QuestionCrumbComponentProps, {}> {
  public render() {
    return (
      <div className="QuestionCrumbComponent breadcrumb">
        <ul>
          <li className="is-active"><a href="#">{this.props.personName}</a></li>
          <li className="is-active"><a href="#">{this.props.category}</a></li>
        </ul>
      </div>
    );
  }
}
