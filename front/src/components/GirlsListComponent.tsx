import React from "react";
import { Girl } from "../domain/Girl";

export interface GirlsListComponentProps {
  girls: Girl[];
}

export class GirlsListComponent extends React.Component<GirlsListComponentProps, {}> {
  public render() {
    const girlsElements = this.props.girls.map((girl) => <a href="#" className="panel-block">
      <div className="media" style={{width: "100%", alignItems: "center"}}>
        <figure className="media-left">
          <p className="image is-64x64">
            <img src={girl.picture ? girl.picture : "https://bulma.io/images/placeholders/128x128.png"} />
          </p>
        </figure>
        <div className="media-content">
          <p>{girl.name}</p>
        </div>
        <div className="media-right">
          <p>{girl.score}</p>
        </div>
      </div>
    </a>);

    return (
      <nav className="panel is-size-4">
        {girlsElements}
      </nav>
    );
  }
}
