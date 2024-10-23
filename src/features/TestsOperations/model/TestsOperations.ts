import axiosInstance from "@/shared/config/ApiConfig/ApiConfig";
import {
  Answer,
  getCreatedTestsType,
  getPassedTestsType,
  getPassingTestQuestionsArrayType,
  getPassingTestQuestionType,
  getPassingTestType,
  sendAnswerType,
  TestCardType,
  TestPassingQuestionType,
} from "./TestOperationsTypes";
import { QuestionType } from "@/entities/NewTest/model/NewTestTypes";

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

export const getPassingTest: getPassingTestType = async (idTest?: string) => {
  try {
    const response = await axiosInstance.get<TestCardType>(`/quizes/${idTest}`);
    return response?.data;
  } catch (e) {
    return false;
  }
};

export const getPassingTestQuestion: getPassingTestQuestionType = async (
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

export const sendAnswer: sendAnswerType = async (
  testId?: string,
  questionNumber?: string | number,
  answer?: Answer
) => {
  try {
    const response = await axiosInstance.post(
      `/quizes/send_answer/${testId}/${questionNumber}?answer=${answer}`
    );
    return true;
  } catch (e) {
    return false;
  }
};
