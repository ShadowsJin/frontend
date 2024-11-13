import { logout } from "@/features/AuthByEmail";
import { updateToken } from "@/features/AuthByEmail/model/services/AuthByEmail/AuthByEmail";
import axios from "axios";

export const axiosAuthInstance = axios.create({
  baseURL: "http://176.109.100.162/api",
  // baseURL: "http://localhost:8080/api",
  withCredentials: true,
});

const axiosInstance = axios.create({
  baseURL: "http://176.109.100.162/api",
  // baseURL: "http://localhost:8080/api",
  withCredentials: true,
});

// axiosInstance.interceptors.request.use((config) => {
//   const cookie = new Cookies();
//   const token = cookie.get("access_token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   } else {
//   }
//   return config;
// });

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      let res = await updateToken();
      if (res) {
        return axiosInstance(originalRequest);
      } else {
        return logout();
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
