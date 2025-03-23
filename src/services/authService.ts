import User from "../types/user";
import axiosInstance from "../utils/axiosInstance";

export const getCurrentUser = async (): Promise<User> => {
  try {
    const response = await axiosInstance.get('/auth/info');
    return response.data;
  } catch (error) {
    console.error('Error fetching current user:', error);
    throw error;
  }
}