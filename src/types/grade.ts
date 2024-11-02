import Assignment from "./assignment";
import Course from "./course";
import Student from "./student";
import Teacher from "./teacher";

export default interface Grade {
  id: string;
  grade: number;
  comments?: string;
  assignment: Assignment;
  course: Course;
  teacher: Teacher;
  student: Student;
}

export type NewGrade = Omit<Grade, 'id' | 'assigment' | 'course' | 'teacher' | 'student'> & {
  assignmentId: string;
  courseId: string;
  teacherId: string;
  studentId: string;
};