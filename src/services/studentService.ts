import Student, { NewStudent } from "../types/student";
import axiosInstance from "../utils/axiosInstance";

export const getStudents = async (): Promise<Student[]> => {
  try {
    const response = await axiosInstance.get('/students');
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

export const createStudent = async (student: NewStudent): Promise<Student> => {
  try {
    const response = await axiosInstance.post('/students', student);
    return response.data;
  } catch (error) {
    console.error('Error creating student:', error);
    throw error;
  }
};