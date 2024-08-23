import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useTestConstructor = create(
  immer((set) => ({
    title: "",
    description: "",
    questions: [{ question: "", answers: [""], trueAnswers: [] }],
    addTitle: (title: string) => {
      set((state) => {
        state.title = title;
      });
    },
    addQuestion: () => {
      set((state) => {
        const newQuestion = {
          question: "",
          answers: [""],
          trueAnswers: [],
        };
        state.questions.push(newQuestion);
      });
    },
    setQuestion: (id: number, question: string) => {
      set((state) => {
        state.questions[id].question = question;
      });
    },
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

    setTrueAnswer: (id: number, idAnswer: number) => {
      set((state) => {
        if (state.questions[id]?.trueAnswers.includes(idAnswer)) {
          let index = state.questions[id]?.trueAnswers.indexOf(idAnswer);
          state.questions[id]?.trueAnswers.splice(index, 1);
        } else {
          state.questions[id]?.trueAnswers?.push(idAnswer);
        }
      });
    },

    deleteQuestion: (id: number) => {
      set((state) => {
        state.questions.splice(id, 1);
      });
    },

    deleteTest: () => {
      set((state) => {
        state.title = "";
        state.questions = [{ question: "", answers: [""], trueAnswers: [] }];
      });
    },
  }))
);

export default useTestConstructor;
