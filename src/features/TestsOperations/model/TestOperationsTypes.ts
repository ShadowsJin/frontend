export interface TestCardType {
  id?: string;
  title?: string;
  description?: string;
  created_at?: string;
  owner_id?: string;
  owner_name?: string;
  questions_count?: number;
  correct_questions?: number;
}

export interface Answer {
  name: string;
  is_correct: boolean;
}

export interface AnswerForPassing {
  id: string;
  name: string;
  is_selected: boolean;
}

export interface TestPassingQuestionType {
  id: string;
  name: string;
  type: string;
  is_answered: boolean;
  is_viewed?: boolean;
  answers: AnswerForPassing[];
}

export interface TestQuestionType {
  name: string;
  type: string;
  answers: Answer[];
}

export interface StatisticCardType {
  user_id: string;
  user_name: string;
  correct_count: number;
  total_count: number;
}

export type getCreatedTestsType = () => Promise<false | TestCardType[]>;

export type getPassedTestsType = () => Promise<false | TestCardType[]>;

export type getTestType = (idTest?: string) => Promise<false | TestCardType>;

export type getTestQuestionType = (
  idTest?: string,
  numberQuestion?: number | string
) => Promise<false | TestPassingQuestionType>;

export type getPassingTestQuestionsArrayType = (
  idTest?: string
) => Promise<false | TestPassingQuestionType[]>;

export type sendAnswerType = (
  idTest?: string,
  numberQuestion?: number | string,
  answers?: string[]
) => Promise<boolean>;

export type CompleteTestType = (id?: string) => Promise<boolean>;

export type GetStatisticsType = (
  id?: string
) => Promise<StatisticCardType[] | false>;
