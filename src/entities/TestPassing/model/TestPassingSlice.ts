import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useTestPassing = create(
  immer((set) => ({
    answers: [""],
    addAnswer: (id: number) => {
      set((state) => {
        state.questions[id].answers.push("");
      });
    },
    setAnswers: (idQuestion: number, idAnswer: number, answer: string) => {
      set((state) => {
        state.questions[idQuestion].answers[idAnswer] = answer;
      });
    },
  }))
);

export default useTestPassing;
