export interface TestCardType {
  id?: string;
  title?: string;
  description?: string;
  created_at?: string;
  owner_id?: string;
  questions_count?: number;
}

export interface Answer {
  name: string;
  is_correct: boolean;
}
export interface TestPassingQuestionType {
  name: string;
  type: string;
  answers: Answer[];
}

export type getCreatedTestsType = () => Promise<false | TestCardType[]>;

export type getPassedTestsType = () => Promise<false | TestCardType[]>;

export type getPassingTestType = (
  idTest?: string
) => Promise<false | TestCardType>;

export type getPassingTestQuestionType = (
  idTest?: string,
  numberQuestion?: number | string
) => Promise<false | TestPassingQuestionType>;

export type getPassingTestQuestionsArrayType = (
  idTest?: string
) => Promise<false | TestPassingQuestionType[]>;

export type sendAnswerType = (
  idTest?: string,
  numberQuestion?: number | string,
  answer?: Answer
) => Promise<boolean>;
