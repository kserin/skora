import { mdiInformationOutline } from "@mdi/js";
import { Icon } from "@mdi/react";
import React from "react";
import { InfoModalAction } from "../../actions/InfoModalAction";

export interface FormControlComponentProps {
  label?: string;
  info?: string;
}

export abstract class FormControlComponent<P extends FormControlComponentProps, S> extends React.Component<P, S> {

  public render() {
    let label: JSX.Element | undefined;
    if (this.props.label) {
      let icon: JSX.Element | undefined;
      if (this.props.info) {
        icon = <a onClick={this.onInfoClick.bind(this)}>
          <Icon path={mdiInformationOutline} size={1} className="has-text-info form-info" />
        </a>;
      }

      label = <label className="label">{this.props.label}
        {icon}
      </label>;
    }

    return (
      <div className="field">
        {label}
        {this.formRender()}
      </div>
    );
  }

  protected abstract formRender(): JSX.Element;

  private onInfoClick() {
    let info: string = "";
    if (typeof this.props.info === "string") {
      // hack to correclty handle type
      info = this.props.info;
    }
    new InfoModalAction().open(info);
  }
}
