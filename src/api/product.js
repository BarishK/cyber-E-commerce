import { api } from "./api";

export const getAllProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    return Promise.reject(error || "Something went wrong");
  }
};
