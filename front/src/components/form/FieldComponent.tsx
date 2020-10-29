import React from "react";
import { FormControlComponent, FormControlComponentProps } from "./FormControlComponent";

export interface FieldComponentProps extends FormControlComponentProps {
  placeholder?: string;
}

export class FieldComponent extends FormControlComponent<FieldComponentProps, {}> {

  protected formRender(): JSX.Element {
    return (
      <div className="control">
        <input className="input" type="text" placeholder={this.props.placeholder} />
      </div>
    );
  }

}
