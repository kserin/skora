import { EventSubscription } from "fbemitter";
import React from "react";
import { GirlsActions } from "../actions/GirlsActions";
import GirlsApi from "../api/GirlsApi";
import { Girl } from "../domain/Girl";
import GirlsListStore from "../stores/GirlsListStore";
import { GirlsListComponent } from "./GirlsListComponent";
import { SpinnerComponent } from "./SpinnerComponent";

interface GirlsListPageComponentState {
  error?: string;
  girls: Girl[];
  loading: boolean;
}

export class GirlsListPageComponent extends React.Component<{}, GirlsListPageComponentState> {
  private subscription: EventSubscription | undefined;

  constructor(props: {}) {
    super(props);

    this.state = {
      girls: [],
      loading: true,
    };
  }

  public render() {
    if (this.state.loading) {
      return (
        <div className="container-fluid has-text-centered">
           <SpinnerComponent />
         </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <GirlsListComponent girls={this.state.girls} />
        </div>
      );
    }
  }

  public componentDidMount() {
    this.subscription = GirlsListStore.addListener(this.onStoreChange.bind(this));
    new GirlsActions().openListPage();
    GirlsApi.list();
  }

  public componentWillUnmount() {
    if (this.subscription) {
      this.subscription.remove();
    }
  }

  private onStoreChange() {
    const data = GirlsListStore.getState();
    this.setState({
      error: data.error,
      girls: data.girls,
      loading: data.loading,
    });
  }
}
