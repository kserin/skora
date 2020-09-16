import React from "react";
import { Link } from "react-router-dom";

interface NavbarComponentState {
  menuOpened: boolean;
}

export class NavbarComponent extends React.Component<{}, NavbarComponentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      menuOpened: false,
    };
  }

  public render() {
    return (
      <nav className="navbar" role="navigation">
        <div className="navbar-brand">
          <a role="button" aria-label="menu" aria-expanded="false" data-target="navbar-menu" 
            className={`navbar-burger burger${this.state.menuOpened ? " is-active" : ""}`}
            onClick={this.onBurgerClick.bind(this)}>

            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu${this.state.menuOpened ? " is-active" : ""}`} id="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item" onClick={this.onMenuItemClick.bind(this)}>Home</Link>
            <Link to="/questions" className="navbar-item" onClick={this.onMenuItemClick.bind(this)}>Questions</Link>
          </div>
        </div>
      </nav>
    );
  }

  private onBurgerClick() {
    this.setState({
      menuOpened: !this.state.menuOpened,
    });
  }

  private onMenuItemClick() {
    this.setState({
      menuOpened: false,
    });
  }
}
