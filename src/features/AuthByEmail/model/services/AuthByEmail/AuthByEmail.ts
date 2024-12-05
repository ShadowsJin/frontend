import axiosInstance, {
  axiosAuthInstance,
} from "@/shared/config/ApiConfig/ApiConfig";
import { getMeType, updateTokenType } from "./AuthByEmail.type";
import notification from "@/shared/config/ApiConfig/Notification";
import { AxiosError } from "axios";
import { APP_URL } from "@/shared/constants/appURL";

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

    notification(`Ошибка входа: ${message}`, "error");

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

    notification(`Ошибка регистрации: ${message}`, "error");

    throw error;
  }
};
export const logout = async () => {
  try {
    axiosAuthInstance.get("/users/logout");

    return true;
  } catch (error) {
    notification("Ошибка выхода из аккаунта", "error");

    return false;
  } finally {
    localStorage.clear();
    window.location.href = APP_URL;
  }
};

export const updateToken: updateTokenType = async () => {
  try {
    await axiosAuthInstance.get("/users/refresh_token");
    return true;
  } catch (error) {
    return false;
  }
};

export const getMe: getMeType = async () => {
  try {
    const response = await axiosInstance.get("/users/me");
    return response?.data;
  } catch (error) {
    notification("Ошибка, не удалось получить данные пользователя", "error");
    throw error;
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
