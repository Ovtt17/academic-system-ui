import Course from "./course";
import Student from "./student";

export enum AttendanceStatus {
  PRESENT = 'Present',
  ABSENT = 'Absent',
  LATE = 'Late',
}

export default interface Attendance {
  id: number;
  studentName: string;
  courseName: string;
  date: Date;
  status: AttendanceStatus;
  student: Student;
  course: Course;
}

export type NewAttendance = Omit<Attendance,
  'id' |
  'studentName' |
  'courseName' |
  'student' |
  'course'
> & {
  studentId: number;
  courseId: number;
};