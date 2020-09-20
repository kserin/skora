import { Girl } from "../domain/Girl";
import { Question } from "../domain/Question";
import { Action } from "./Action";

export interface Payload {
  type: Action;
  data: any;
}

interface ApiResult<T> {
  content: T;
  error?: string;
}

interface ApiResultPayload<T> extends Payload {
  data: ApiResult<T>;
}

export type GirlsPayload = ApiResultPayload<Girl[]>;

export type QuestionsPayload = ApiResultPayload<Question[]>;
