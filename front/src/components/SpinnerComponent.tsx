import { mdiLoading } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";

export class SpinnerComponent extends React.Component<{}, {}> {
  public render() {
    return (
      <Icon path={mdiLoading} size={2} style={{animation: "rotation 2s infinite linear"}} />
    );
  }
}
