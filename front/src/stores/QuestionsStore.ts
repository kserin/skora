import { ReduceStore } from "flux/utils";
import { Action } from "../actions/Action";
import { Payload, QuestionsPayload } from "../actions/Payload";
import { Question } from "../domain/Question";
import { copy } from "../utils/ObjectUtils";
import AppDispatcher from "./AppDispatcher";

interface QuestionsStoreData {
  questions: Question[];
  loading: boolean;
  error?: string;
}

class QuestionsStore extends ReduceStore<QuestionsStoreData, Payload> {
  public getInitialState(): QuestionsStoreData {
    return {
      loading: false,
      questions: [],
    };
  }

  public reduce(state: QuestionsStoreData, action: Payload): QuestionsStoreData {
    switch (action.type) {
      case Action.OPEN_QUESTIONS_LIST_PAGE: {
        return {
          loading: true,
          questions: [],
        };
      }

      case Action.LOAD_QUESTIONS: {
        const data = (action as QuestionsPayload).data;
        return {
          error: data.error,
          loading: false,
          questions: copy(data.content),
        };
      }
    }
    return state;
  }
}

export default new QuestionsStore(AppDispatcher);
