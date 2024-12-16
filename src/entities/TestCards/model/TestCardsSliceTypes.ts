import { TestCardType } from "@/features/TestsOperations/model/TestOperationsTypes";

export interface testCardsSearching {
  tests: TestCardType[] | null;
  params: string | null;
  setTests: (tests: TestCardType[] | null) => void;
  setParams: (params: string | null) => void;
}
