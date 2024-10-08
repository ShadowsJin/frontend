import axios from "axios";
import { Cookies } from "react-cookie";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const cookie = new Cookies();
  const token = cookie.get("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
