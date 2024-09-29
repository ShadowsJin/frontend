import axios from "axios";
import { Cookies } from "react-cookie";

const axiosInstance = axios.create({
  baseURL: "http://176.109.100.162/api",
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const cookie = new Cookies();
  const token = cookie.get("jwt_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
