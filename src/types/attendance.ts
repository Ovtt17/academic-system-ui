import Course from "./course";
import Student from "./student";

export default interface Attendance {
  id: number;
  studentName: string;
  courseName: string;
  date: Date;
  status: 'Present' | 'Absent' | 'Late';
  student: Student;
  course: Course;
}

export type NewAttendance = Omit<Attendance, 'id' | 'student' | 'course'> & {
  studentId: number;
  courseId: number;
};