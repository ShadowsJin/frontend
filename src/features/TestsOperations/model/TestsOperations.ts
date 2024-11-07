import axiosInstance from "@/shared/config/ApiConfig/ApiConfig";
import {
  Answer,
  AnswerForPassing,
  CompleteTestType,
  getCreatedTestsType,
  getPassedTestsType,
  getPassingTestQuestionsArrayType,
  getTestQuestionType,
  getTestType,
  sendAnswerType,
  TestCardType,
  TestPassingQuestionType,
  TestQuestionType,
} from "./TestOperationsTypes";
import { QuestionType } from "@/entities/Test/model/TestSliceTypes";

export const createTest = async (
  title?: string,
  description?: string,
  questions?: QuestionType[]
) => {
  try {
    const response = await axiosInstance.post("/quizes/new", {
      title,
      description,
      questions,
    });
    return true;
  } catch (e) {
    return false;
  }
};

export const editTest = async (
  id?: string,
  title?: string,
  description?: string,
  questions?: QuestionType[]
) => {
  try {
    const response = await axiosInstance.put(`/quizes/${id}`, {
      title,
      description,
      questions,
    });
    return true;
  } catch (e) {
    return false;
  }
};

export const getCreatedTests: getCreatedTestsType = async () => {
  try {
    const response = await axiosInstance.get<TestCardType[]>("/quizes/created");
    return response?.data;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getPassedTests: getPassedTestsType = async () => {
  try {
    const response = await axiosInstance.get<TestCardType[]>(
      "/quizes/completed"
    );
    return response?.data;
  } catch (e) {
    return false;
  }
};

export const getTest: getTestType = async (idTest?: string) => {
  try {
    const response = await axiosInstance.get<TestCardType>(`/quizes/${idTest}`);
    return response?.data;
  } catch (e) {
    return false;
  }
};

export const getTestQuestion: getTestQuestionType = async (
  idTest?: string,
  numberQuestion?: number | string
) => {
  try {
    const response = await axiosInstance.get<TestPassingQuestionType>(
      `/quizes/${idTest}/${numberQuestion}`
    );
    return response?.data;
  } catch (e) {
    return false;
  }
};

export const getPassingTestQuestionsArray: getPassingTestQuestionsArrayType =
  async (idTest?: string) => {
    try {
      const response = await axiosInstance.get<TestPassingQuestionType[]>(
        `/quizes/${idTest}/questions`
      );
      return response?.data;
    } catch (e) {
      return false;
    }
  };

export const sendAnswers: sendAnswerType = async (
  testId?: string,
  questionNumber?: string | number,
  answers?: string[]
) => {
  try {
    console.log(answers?.map((answer) => `answer=${answer}&`));
    const response = await axiosInstance.post(
      `/quizes/send_answer/${testId}/${questionNumber}?${answers
        ?.map((answer) => `answer=${answer}&`)
        .join("")}`
    );
    return true;
  } catch (e) {
    return false;
  }
};

export const completeTest: CompleteTestType = async (id?: string) => {
  try {
    const response = await axiosInstance.get(`/quizes/finish_test/${id}`);
    return true;
  } catch (e) {
    return false;
  }
};
