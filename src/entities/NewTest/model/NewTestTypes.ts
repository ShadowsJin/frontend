import { Answer } from "@/features/TestsOperations/model/TestOperationsTypes";

export interface newTestType {
  title: string;
  description: string;
  questions: QuestionType[];
  addTitle: (title: string) => void;
  addDescription: (description: string) => void;
  addQuestion: () => void;
  setQuestion: (id: number, question: string) => void;
  addAnswer: (id: number) => void;
  setAnswers: (idQuestion: number, idAnswer: number, answer: string) => void;

  setTrueAnswer: (id: number, idAnswer: number) => void;

  deleteQuestion: (id: number) => void;

  deleteTest: () => void;
}

export interface QuestionType {
  name: string;
  answers: Answer[];
}
