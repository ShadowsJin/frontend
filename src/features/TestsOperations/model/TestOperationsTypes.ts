import { AxiosResponse } from "axios";

export interface TestCardType {
  title: string;
  description?: string;
}

export interface TestPassingType {
  name: string;
  description: string;
  owner: string;
}

export type getCreatedTestsType = () => Promise<false | TestCardType[]>;

export type getPassedTestsType = () => Promise<false | TestCardType[]>;

export type getPassingTestType = (
  idTest: string
) => Promise<false | TestPassingType>;
