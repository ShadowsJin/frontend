import axiosInstance from "@/shared/config/ApiConfig/ApiConfig";
import { log } from "console";
import { Cookies } from "react-cookie";
import { create } from "zustand";

const cookies = new Cookies();

const useUserStore = create((set) => ({
  user: { firstName: "Александр", lastName: "Гренкин" },
  token: cookies.get("token") || null,
  Login: async (email: string, password: string) => {
    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      set({ user: response.data, token: response.data.token });
      cookies.set("token", response.data.token);
    } catch (e) {
      console.log(e);
    }
  },
  Register: async (fullname: string, email: string, password: string) => {
    try {
      const response = await axiosInstance.post("/auth/register", {
        fullname,
        email,
        password,
      });
    } catch (e) {
      console.log(e);
    }
  },
  Logout: () => {
    cookies.remove("token");
    set({ user: null, token: null });
  },
}));

export default useUserStore;
