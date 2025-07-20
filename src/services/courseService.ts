import Course, { NewCourse } from "../types/course";
import axiosInstance from "../utils/axiosInstance";
import {handleError} from "../components/error/handleError.ts";

export const getCourses = async (): Promise<Course[]> => {
  try {
    const response = await axiosInstance.get('/courses');
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

export const getCourseById = async (id: number): Promise<Course> => {
  try {
    const response = await axiosInstance.get(`/courses/${id}`);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

export const createCourse = async (course: NewCourse): Promise<Course> => {
  try {
    const response = await axiosInstance.post('/courses', course);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

export const updateCourse = async (id: number, course: NewCourse): Promise<Course> => {
  try {
    const response = await axiosInstance.put(`/courses/${id}`, course);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
}