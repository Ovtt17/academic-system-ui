import Student, { NewStudent } from "../types/student";

const BASE_URL = `${import.meta.env.VITE_API_URL}/students`;

const getHeaders = () => ({
  'Content-Type': 'application/json',
  'Accept': 'application/json'
});

export const getStudents = async (): Promise<Student[]> => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: getHeaders(),
      credentials: 'include'
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const students: Student[] = await response.json();
    return students;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

export const createStudent = async (student: NewStudent): Promise<Student> => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: getHeaders(),
      credentials: 'include',
      body: JSON.stringify(student)
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const createdStudent: Student = await response.json();
    return createdStudent;
  } catch (error) {
    console.error('Error creating course:', error);
    throw error;
  }
};