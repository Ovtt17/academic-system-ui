import Course from "./course";

enum AssignmentStatus {
  OPEN = 'Open',
  CLOSED = 'Closed',
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