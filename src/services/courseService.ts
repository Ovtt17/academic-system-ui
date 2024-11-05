import Course from "../types/course";

const BASE_URL = `${import.meta.env.VITE_API_URL}/courses`;

const getHeaders = () => ({
  'Content-Type': 'application/json',
  'Accept': 'application/json'
});

export const getCourses = async (): Promise<Course[]> => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: getHeaders(),
      credentials: 'include'
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const courses: Course[] = await response.json();
    return courses;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};