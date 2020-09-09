import React from "react";

export interface ScoreComponentProps {
  points: number;
}

export class ScoreComponent extends React.Component<ScoreComponentProps, {}> {
  public render() {
    return (
      <span
        className="points tag is-medium is-primary"
        style={{ width: "45px", height: "45px", borderRadius: "50%", fontWeight: "bold"}}>
          {this.props.points}
      </span>
    );
  }
}
