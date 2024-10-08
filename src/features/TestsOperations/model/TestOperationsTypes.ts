import { AxiosResponse } from "axios";

export interface TestCardType {
  title: string;
  description?: string;
}
export type getCreatedTestsType = () => Promise<false | TestCardType[]>;

export type getPassedTestsType = () => Promise<false | TestCardType[]>;
