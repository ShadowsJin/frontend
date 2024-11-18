import { logout } from "@/features/AuthByEmail";
import { updateToken } from "@/features/AuthByEmail/model/services/AuthByEmail/AuthByEmail";
import { API_URL } from "@/shared/constants/appURL";
import axios from "axios";

export const axiosAuthInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const axiosInstance = axios.create({
  baseURL: API_URL,
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
