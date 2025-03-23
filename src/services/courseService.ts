import Course, { NewCourse } from "../types/course";
import axiosInstance from "../utils/axiosInstance";

export const getCourses = async (): Promise<Course[]> => {
  try {
    const response = await axiosInstance.get('/courses');
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

export const getCourseById = async (id: string): Promise<Course> => {
  try {
    const response = await axiosInstance.get(`/courses/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching course:', error);
    throw error;
  }
};

export const createCourse = async (course: NewCourse): Promise<Course> => {
  try {
    const response = await axiosInstance.post('/courses', course);
    return response.data;
  } catch (error) {
    console.error('Error creating course:', error);
    throw error;
  }
};