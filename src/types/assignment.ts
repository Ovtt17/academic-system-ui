import Course from "./course";

export enum AssignmentStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

export default interface AssignmentResponse {
  id?: number;
  title: string;
  description: string;
  dueDate: Date;
  course: Course;
  status: AssignmentStatus;
  totalSubmissions: number;
  totalStudents: number;
}

export type AssignmentRequest = Omit<AssignmentResponse, 'status' | 'course' | 'totalSubmissions' | 'totalStudents'> & {
  courseId: number
};