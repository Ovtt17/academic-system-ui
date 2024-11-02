import { Assignment } from "./assignment";
import { CourseSchedule } from "./courseSchedule";
import Student from "./student";
import { Teacher } from "./teacher";

interface BaseCourse {
  name: string;
  description: string;
  section: string;
  grade: string;
  schedules: CourseSchedule[];
  assignments?: Assignment[];
}

export interface Course extends BaseCourse {
  id: number;
  students: Student[];
  teacher: Teacher;
}

export interface NewCourse extends BaseCourse {
  teacherId: number;
  studentIds: number[];
}