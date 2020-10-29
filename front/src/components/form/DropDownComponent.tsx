import React from "react";
import { FormControlComponent, FormControlComponentProps } from "./FormControlComponent";

export interface DropDownComponentProps extends FormControlComponentProps {
  icon?: React.ReactNode;
  onChange?: (value: string) => void;
}

export class DropDownComponent extends FormControlComponent<DropDownComponentProps, {}> {

  protected formRender(): JSX.Element {
    const icon = ! this.props.icon ? undefined : <div className="icon is-small is-left">
      {this.props.icon}
    </div>;

    return (
      <div className={`control${this.props.icon ? " has-icons-left" : ""}`}>
        <div className="select" style={{width: "100%"}}>
          <select style={{width: "100%"}} onChange={this.onChange.bind(this)}>
            {this.props.children}
          </select>
        </div>
        {icon}
      </div>
    );
  }

  private onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
  }
}
