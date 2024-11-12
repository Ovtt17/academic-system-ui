import Assignment from "./assignment";
import CourseSchedule, { NewCourseSchedule } from "./courseSchedule";
import Teacher from "./teacher";

export default interface Course {
  id: number;
  name: string;
  description: string;
  section: string;
  semester: string;
  schedules: CourseSchedule[];
  assignments?: Assignment[];
  totalStudents: number;
  teacher: Teacher;
}

export type NewCourse = Omit<Course,
  'id' |
  'totalStudents' |
  'teacher' |
  'schedules' |
  'assignments'
> & {
  schedules: NewCourseSchedule[];
};