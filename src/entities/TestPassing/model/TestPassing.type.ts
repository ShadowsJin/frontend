import { Answer } from "@/features/TestsOperations/model/TestOperationsTypes";

export interface testPassingType {
  answers: Answer[];
  addAnswer: (id: number) => void;
}
