export interface Attendance {
  id: number;
  studentName: string;
  courseName: string;
  date: Date;
  status: 'Present' | 'Absent' | 'Late';
  studentId: number;
  courseId: number;
}

export type NewAttendance = Omit<Attendance, 'id' | 'studentName' | 'courseName'>;