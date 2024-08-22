import axiosInstance from "@/shared/config/ApiConfig/ApiConfig";
import { create } from "zustand";

const useUserStore = create((set) => ({
  user: { firstName: "Александр", lastName: "Гренкин" },
  GetMyData: async () => {
    try {
      const response = await axiosInstance.post("/users/me");
      set({ user: response.data });
    } catch (e) {
      console.log(e);
    }
  },
}));

export default useUserStore;
