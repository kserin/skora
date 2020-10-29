import { EventSubscription } from "fbemitter";
import React from "react";
import { InfoModalAction } from "../actions/InfoModalAction";
import InfoModalStore from "../stores/InfoModalStore";
import { QuestionFormComponent } from "./QuestionFormComponent";

interface QuestionFormPageComponentState {
  displayModal: boolean;
  modalText: string;
}

export class QuestionFormPageComponent extends React.Component<{}, QuestionFormPageComponentState> {
  private subscription: EventSubscription | undefined;

  constructor(props: {}) {
    super(props);
    this.state = {
      displayModal: false,
      modalText: "",
    };
  }

  public render() {
    return (
      <div className="container-fluid">
        <div className={`modal${this.state.displayModal ? " is-active" : ""}`}>
          <div className="modal-background" onClick={this.onClose.bind(this)} />
          <div className="modal-card">
            <header className="modal-card-head has-background-info">
              <p className="modal-card-title has-text-white">Info</p>
              <button className="delete" aria-label="close" onClick={this.onClose.bind(this)}></button>
            </header>
            <section className="modal-card-body">
              <p>{this.state.modalText}</p>
            </section>
            <footer className="modal-card-foot" style={{justifyContent: "flex-end"}}>
              <button className="button is-primary" onClick={this.onClose.bind(this)}>OK</button>
            </footer>
          </div>
        </div>

        <div className="box">
          <QuestionFormComponent />
        </div>
      </div>
    );
  }

  public componentDidMount() {
    this.subscription = InfoModalStore.addListener(this.onModalChange.bind(this));
  }

  public componentWillUnmount() {
    if (this.subscription) {
      this.subscription.remove();
    }
  }

  private onClose() {
    new InfoModalAction().close();
  }

  private onModalChange() {
    const data = InfoModalStore.getState();
    this.setState({
      displayModal: data.opened,
      modalText: data.text,
    });
  }
}
