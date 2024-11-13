import axiosInstance, {
  axiosAuthInstance,
} from "@/shared/config/ApiConfig/ApiConfig";
import { getMeType, updateTokenType } from "./AuthByEmail.type";
import notification from "@/shared/config/ApiConfig/Notification";
import { AxiosError } from "axios";

export const loginFetch = async (email: string, password: string) => {
  try {
    const response = await axiosAuthInstance.post(
      "/users/login",
      {
        email,
        password,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    if (response) localStorage.setItem("isAuth", "true");
    return true;
  } catch (error) {
    const message = (error as AxiosError<{ detail: string }>).response?.data
      ?.detail;

    notification("Неправильный логин или пароль", "error");

    throw error;
  }
};
export const registerFetch = async (
  fullname: string,
  email: string,
  password: string
) => {
  try {
    const response = await axiosAuthInstance.post(
      "/users/register",
      {
        fullname,
        email,
        password,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response) localStorage.setItem("isAuth", "true");

    return true;
  } catch (error) {
    const message = (error as AxiosError<{ detail: string }>).response?.data
      ?.detail;

    notification("Такой пользователь уже существует", "error");

    throw error;
  }
};
export const logout = async () => {
  try {
    localStorage.removeItem("isAuth");
    const response = await axiosAuthInstance.get("/users/logout");

    return true;
  } catch (e) {
    console.log(e);
  }
};

export const updateToken: updateTokenType = async () => {
  try {
    const response = await axiosAuthInstance.get("/users/refresh_token");
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getMe: getMeType = async () => {
  try {
    const response = await axiosInstance.get("/users/me");
    return response?.data;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const changeProfile = async (fullname: string, email: string) => {
  try {
    const response = await axiosInstance.put("/users/edit", {
      fullname,
      email,
    });
    return true;
  } catch (e) {
    return false;
  }
};
