import axiosInstance from "@/shared/config/ApiConfig/ApiConfig";
import { create } from "zustand";

const isToken = document.cookie.includes("access_token");

const useAuthByEmailStore = create((set) => ({
  isToken: isToken,
  Login: async (email: string, password: string) => {
    try {
      const response = await axiosInstance.post("/users/login", {
        email,
        password,
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
  Register: async (fullname: string, email: string, password: string) => {
    try {
      const response = await axiosInstance.post("/users/register", {
        fullname,
        email,
        password,
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
  RefreshToken: async () => {
    try {
      const response = await axiosInstance.get("/users/refresh_token");
    } catch (e) {
      console.log(e);
    }
  },
  Logout: async () => {
    try {
      const response = await axiosInstance.get("/users/logout");
    } catch (e) {
      console.log(e);
    }
  },
}));

export default useAuthByEmailStore;
