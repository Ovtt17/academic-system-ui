interface BaseAttendance {
  date: Date;
  status: 'Present' | 'Absent' | 'Late';
  studentId: number;
  classId: number;
}

export interface Attendance extends BaseAttendance {
  id: number;
  studentName: string;
  className: string;
}

export type NewAttendance = BaseAttendance;