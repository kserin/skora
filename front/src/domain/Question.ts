export enum QuestionSeverity {
  ANECDOTIC,
  MINOR,
  MAJOR,
  BLOCKING,
}

export interface Question {
  question: string;
  category: string;
  severity: QuestionSeverity;
  details?: string;
  answers: string[];
}
