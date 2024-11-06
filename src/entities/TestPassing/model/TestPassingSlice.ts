import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { testPassingType } from "./TestPassing.type";

const useTestPassing = create(
  immer<testPassingType>((set) => ({
    answers: [{ name: "", is_correct: false }],
    addAnswer: (id: number) => {
      set((state) => {
        state.answers.push({ name: "", is_correct: false });
      });
    },
  }))
);

export default useTestPassing;
