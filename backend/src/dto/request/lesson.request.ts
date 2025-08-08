export type PostLessonByIdRequest = {
  attemptId: string;
  answers: AnswerRequest[];
}

type AnswerRequest = {
  questionId: number;
  value: string;
  optionId?: number;
}