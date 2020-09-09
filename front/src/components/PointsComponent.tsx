import React from "react";

export interface PointsComponentProps {
  points: number;
}

export class PointsComponent extends React.Component<PointsComponentProps, {}> {
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
