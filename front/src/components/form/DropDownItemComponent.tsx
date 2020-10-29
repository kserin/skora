import React from "react";

export interface DropDownItemComponentProps {
  label: string;
  value?: string;
}

export class DropDownItemComponent extends React.Component<DropDownItemComponentProps, {}> {
  public render() {
    return <option value={this.props.value}>{this.props.label}</option>;
  }
}
