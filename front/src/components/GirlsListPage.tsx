import React from "react";
import { GirlsListComponent } from "./GirlsListComponent";
import { Girl } from "../domain/Girl";

export class GirlsListPageComponent extends React.Component<{}, {}> {
  public render() {
    const girls: Girl[] = [
      {
        name: "Tricia",
        score: 125,
      },
      {
        name: "Charline",
        score: 78,
      },
      {
        name: "Manon",
        score: -5,
      }
    ];

    return (
      <div className="container-fluid">
        <GirlsListComponent girls={girls} />
      </div>
    );
  }
}
