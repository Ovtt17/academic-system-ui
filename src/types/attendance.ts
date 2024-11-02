interface BaseAttendance {
  date: Date;
  status: 'Present' | 'Absent' | 'Late';
  studentId: number;
  courseId: number;
}

export interface Attendance extends BaseAttendance {
  id: number;
  studentName: string;
  courseName: string;
}

export type NewAttendance = BaseAttendance;