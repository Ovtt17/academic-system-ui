import Course from "./course";

export enum AssignmentStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

export default interface Assignment {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  course: Course;
  status: AssignmentStatus;
  totalSubmissions: number;
}

export type NewAssignment = Omit<Assignment, 'id' | 'status' | 'course' | 'submissions'> & {
  courseId: number
};