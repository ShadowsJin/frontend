export interface TestCardType {
  title: string;
  description?: string;
}

export interface TestPassingType {
  name: string;
  description: string;
  owner: string;
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
  idTest: string
) => Promise<false | TestPassingType>;

export type getPassingTestQuestionType = (
  idTest: string,
  numberQuestion: number | string
) => Promise<false | TestPassingQuestionType>;

export type sendAnswerType = (
  idTest?: string,
  numberQuestion?: number | string,
  answer?: Answer
) => Promise<boolean>;
