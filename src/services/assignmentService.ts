import { handleError } from "../components/error/handleError";
import AssignmentResponse, { AssignmentRequest } from "../types/assignment";
import axiosInstance from "../utils/axiosInstance";

export const getAssignments = async (): Promise<AssignmentResponse[]> => {
  try {
    const response = await axiosInstance.get('/assignments');
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
}

export const getAssignmentById = async (id: number): Promise<AssignmentResponse> => {
  try {
    const response = await axiosInstance.get(`/assignments/${id}`);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
}

export const createAssignment = async (assignment: AssignmentRequest): Promise<AssignmentResponse> => {
  try {
    const response = await axiosInstance.post('/assignments', assignment);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
}

export const updateAssignment = async (id: number, assignment: AssignmentRequest): Promise<AssignmentResponse> => {
  try {
    const response = await axiosInstance.put(`/assignments/${id}`, assignment);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
}