import Assignment from "../types/assignment";
import axiosInstance from "../utils/axiosInstance";

export const getAssignments = async (): Promise<Assignment[]> => {
  try {
    const response = await axiosInstance.get('/assignments');
    return response.data;
  } catch (error) {
    console.error('Error fetching assignments:', error);
    throw error;
  }
}

export const getAssignmentById = async (id: string): Promise<Assignment> => {
  try {
    const response = await axiosInstance.get(`/assignments/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching assignment:', error);
    throw error;
  }
}

export const createAssignment = async (assignment: Assignment): Promise<Assignment> => {
  try {
    const response = await axiosInstance.post('/assignments', assignment);
    return response.data;
  } catch (error) {
    console.error('Error creating assignment:', error);
    throw error;
  }
}