import AssignmentResponse from "./assignment";
import CourseSchedule, { NewCourseSchedule } from "./courseSchedule";
import Teacher from "./teacher";

export default interface Course {
  id?: number;
  name: string;
  description: string;
  section: string;
  semester: string;
  schedules: CourseSchedule[];
  assignments?: AssignmentResponse[];
  totalStudents: number;
  teacher: Teacher;
}

export type NewCourse = Omit<Course,
  'totalStudents' |
  'teacher' |
  'schedules' |
  'assignments'
> & {
  schedules: NewCourseSchedule[];
};