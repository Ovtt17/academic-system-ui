import Assignment from "./assignment";
import CourseSchedule from "./courseSchedule";
import Student from "./student";
import Teacher from "./teacher";

export default interface Course {
  id: number;
  name: string;
  description: string;
  section: string;
  semester: string;
  schedules: CourseSchedule[];
  assignments?: Assignment[];
  students: Student[];
  teacher: Teacher;
}

export type NewCourse = Omit<Course, 'id' | 'students' | 'teacher'> & {
  teacherId: number;
  studentIds: number[];
};