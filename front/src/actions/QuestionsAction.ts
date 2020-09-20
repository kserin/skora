import { Question } from "../domain/Question";
import AppDispatcher from "../stores/AppDispatcher";
import { Action } from "./Action";
import { Payload, QuestionsPayload } from "./Payload";

export class QuestionsAction {
  public openPage() {
    const payload: Payload = {
      data: {
        content: null,
      },
      type: Action.OPEN_QUESTIONS_LIST_PAGE,
    };

    AppDispatcher.dispatch(payload);
  }

  public loadQuestions(questions: Question[], error?: string) {
    const payload: QuestionsPayload = {
      data: {
        content: questions,
        error,
      },
      type: Action.LOAD_QUESTIONS,
    };

    AppDispatcher.dispatch(payload);
  }
}
