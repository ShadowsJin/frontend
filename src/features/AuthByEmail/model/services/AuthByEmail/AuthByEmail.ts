import axiosInstance from "@/shared/config/ApiConfig/ApiConfig";

export const loginFetch = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post(
      "/users/login",
      {
        email,
        password,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
export const registerFetch = async (
  fullname: string,
  email: string,
  password: string
) => {
  try {
    const response = await axiosInstance.post(
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

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
export const logout = async () => {
  try {
    const response = await axiosInstance.get("/users/logout");
    return true;
  } catch (e) {
    console.log(e);
  }
};
