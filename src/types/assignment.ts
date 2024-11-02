import Course from "./course";

export default interface Assignment {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  course: Course;
  submissions: number;
}

export type NewAssignment = Omit<Assignment, 'id' | 'course' | 'submissions'> & {
  courseId: number
};