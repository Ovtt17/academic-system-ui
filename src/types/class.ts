import { Assignment } from "./assignment";
import { ClassSchedule } from "./ClassSchedule";
import Student from "./student";
import { Teacher } from "./teacher";

interface BaseClass {
  name: string;
  description: string;
  section: string;
  grade: string;
  schedules: ClassSchedule[];
  assignments?: Assignment[];
}

export interface Class extends BaseClass {
  id: number;
  students: Student[];
  teacher: Teacher;
}

export interface NewClass extends BaseClass {
  teacherId: number;
  studentIds: number[];
}