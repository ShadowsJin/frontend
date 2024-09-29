import axiosInstance from "@/shared/config/ApiConfig/ApiConfig";

export const createTest = async (
  title?: string,
  description?: string,
  questions?: string
) => {
  try {
    const response = await axiosInstance.post("/quizes/new", {
      title,
      description,
      questions,
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
