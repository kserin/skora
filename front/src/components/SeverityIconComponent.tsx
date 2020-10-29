import { mdiChevronDown, mdiChevronTripleDown, mdiChevronTripleUp, mdiChevronUp } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { QuestionSeverity } from "../domain/Question";

export interface SeverityIconComponentProps {
  severity: QuestionSeverity;
}

export class SeverityIconComponent extends React.Component<SeverityIconComponentProps, {}> {
  public render() {
    return <Icon path={this.iconName(this.props.severity)} size={1} className={this.colorClass(this.props.severity)} />;
  }

  private iconName(severity: QuestionSeverity): string {
    switch (severity) {
      case QuestionSeverity.ANECDOTIC:
        return mdiChevronTripleDown;
      case QuestionSeverity.MINOR:
        return mdiChevronDown;
      case QuestionSeverity.MAJOR:
        return mdiChevronUp;
      case QuestionSeverity.BLOCKING:
        return mdiChevronTripleUp;
    }
  }

  private colorClass(severity: QuestionSeverity): string {
    switch (severity) {
      case QuestionSeverity.ANECDOTIC:
      case QuestionSeverity.MINOR:
        return "has-text-info";
      case QuestionSeverity.MAJOR:
      case QuestionSeverity.BLOCKING:
        return "has-text-danger";
    }
  }
}
