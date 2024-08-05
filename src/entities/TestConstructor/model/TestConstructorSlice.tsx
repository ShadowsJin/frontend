import { title } from "process";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useTestConstructor = create(
  immer((set) => ({
    title: "",
    questions: [{ question: "", answers: [""], trueAnswer: 0 }],
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
          trueAnswer: 0,
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

    setTrueAnswer: (id: number, trueAnswer: number) => {
      set((state) => {
        state.trueAnswer[id].trueAnswer = trueAnswer;
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
        state.questions = [{ question: "", answers: [""], trueAnswer: 0 }];
      });
    },
  }))
);

export default useTestConstructor;
