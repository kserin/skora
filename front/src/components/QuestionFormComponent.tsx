import React from "react";
import { QuestionSeverity } from "../domain/Question";
import { DropDownComponent } from "./form/DropDownComponent";
import { DropDownItemComponent } from "./form/DropDownItemComponent";
import { FieldComponent } from "./form/FieldComponent";
import { SeverityIconComponent } from "./SeverityIconComponent";

interface QuestionFormComponentState {
  severity: QuestionSeverity;
}

export class QuestionFormComponent extends React.Component<{}, QuestionFormComponentState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      severity: QuestionSeverity.ANECDOTIC,
    };
  }

  public render() {
    return (
      <form>
        <FieldComponent label="Question" info="Il faut expliquer !" />
        <FieldComponent label="Description" />
        <DropDownComponent
          label="Gravité"
          info="Un autre explication"
          onChange={this.onSeverityChange.bind(this)}
          icon={<SeverityIconComponent severity={this.state.severity} />}>
          <DropDownItemComponent label="Anecdotique" value={QuestionSeverity[QuestionSeverity.ANECDOTIC]} />
          <DropDownItemComponent label="Mineur" value={QuestionSeverity[QuestionSeverity.MINOR]} />
          <DropDownItemComponent label="Majeur" value={QuestionSeverity[QuestionSeverity.MAJOR]} />
          <DropDownItemComponent label="Bloquant" value={QuestionSeverity[QuestionSeverity.BLOCKING]} />
        </DropDownComponent>
        <DropDownComponent label="Categorie">
        </DropDownComponent>
      </form>
    );
  }

  private onSeverityChange(value: string) {
    const severity = QuestionSeverity[value as keyof typeof QuestionSeverity];
    this.setState({
      severity,
    });
  }
}
