import { QuestionsAction } from "../actions/QuestionsAction";
import { Error } from "../domain/Error";
import { Question, QuestionSeverity } from "../domain/Question";
import { RestApi } from "./RestApi";

class QuestionsApi extends RestApi {
  public async list() {
    const result = await this.httpGet("/api/questions");
    const body = await result.json();

    if (result.ok) {
      new QuestionsAction().loadQuestions((body as any[]).map(this.toQuestion.bind(this)));
    } else {
      new QuestionsAction().loadQuestions([], (body as Error).errorMessage);
    }
  }

  private toQuestion(json: any): Question {
    return {
      answers: json.answers,
      category: json.category,
      details: json.details,
      question: json.question,
      severity: this.toSeverity(json.severity),
    };
  }

  private toSeverity(json: string): QuestionSeverity {
    switch(json) {
      case "ANECDOTIC":
        return QuestionSeverity.ANECDOTIC;
      case "MINOR":
        return QuestionSeverity.MINOR;
      case "MAJOR":
        return QuestionSeverity.MAJOR;
      case "BLOCKING":
        return QuestionSeverity.BLOCKING;
    }
    return QuestionSeverity.ANECDOTIC;
  }
}

export default new QuestionsApi();
