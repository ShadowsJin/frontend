import { TestCardType } from "@/features/TestsOperations/model/TestOperationsTypes";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { testCardsSearching } from "./TestCardsSliceTypes";

const useTestCardsSearchingSlice = create(
  immer<testCardsSearching>((set) => ({
    tests: null,
    params: "",
    setTests: (tests: TestCardType[] | null) => {
      set((state) => {
        state.tests = tests;
      });
    },
    setParams: (params: string | null) => {
      set((state) => {
        state.params = params;
      });
    },
  }))
);

export default useTestCardsSearchingSlice;
