export enum AttendanceStatus {
  PRESENT = 'Present',
  ABSENT = 'Absent',
  LATE = 'Late',
}

export default interface Attendance {
  id: number;
  studentFullName: string;
  courseName: string;
  date: Date;
  status: AttendanceStatus;
}

export type NewAttendance = Omit<Attendance,
  'id' |
  'studentFullName' |
  'courseName'
> & {
  studentId: number;
  courseId: number;
  courseScheduleId: number;
};