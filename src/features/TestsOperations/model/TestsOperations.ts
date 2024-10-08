import axiosInstance from "@/shared/config/ApiConfig/ApiConfig";
import {
  getCreatedTestsType,
  getPassedTestsType,
  TestCardType,
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
    console.log(e);
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
    console.log(e);
    return false;
  }
};
