import { DashboardData } from "../types/dashboardData";
import axiosInstance from "../utils/axiosInstance";

export const getDashboardData = async (): Promise<DashboardData> => {
  try {
    const response = await axiosInstance.get('/dashboard');
    return response.data;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
};