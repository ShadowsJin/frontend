import axiosInstance from "@/shared/config/ApiConfig/ApiConfig";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { newTestType, QuestionType } from "./NewTestTypes";

const useNewTest = create(
  immer<newTestType>((set) => ({
    title: "",
    description: "",
    questions: [{ name: "", answers: [{ name: "", is_correct: false }] }],
    addTitle: (title: string) => {
      set((state) => {
        state.title = title;
      });
    },
    addDescription: (description: string) => {
      set((state) => {
        state.description = description;
      });
    },
    addQuestion: () => {
      set((state) => {
        const newQuestion = {
          name: "",
          answers: [{ name: "", is_correct: false }],
        };
        state.questions.push(newQuestion);
      });
    },
    setQuestion: (id: number, name: string) => {
      set((state) => {
        state.questions[id].name = name;
      });
    },
    addAnswer: (id: number) => {
      set((state) => {
        state.questions[id].answers.push({ name: "", is_correct: false });
      });
    },
    setAnswers: (idQuestion: number, idAnswer: number, answerName: string) => {
      set((state) => {
        state.questions[idQuestion].answers[idAnswer].name = answerName;
      });
    },

    setTrueAnswer: (id: number, idAnswer: number) => {
      set((state) => {
        if (state.questions[id].answers[idAnswer].is_correct) {
          state.questions[id].answers[idAnswer].is_correct = true;
        } else {
          state.questions[id].answers[idAnswer].is_correct = false;
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
        state.questions = [
          { name: "", answers: [{ name: "", is_correct: false }] },
        ];
      });
    },

    createTest: async (
      title: string,
      description: string,
      questions: QuestionType[]
    ) => {
      try {
        const response = await axiosInstance.post("/quizes/new", {
          title,
          description,
          questions,
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  }))
);

export default useNewTest;
