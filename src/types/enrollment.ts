export default interface Enrollment {
  id: string;
  courseId: string;
  studentId: string;
  studentName: string;
  grade: number;
}

export type NewEnrollment = Omit<Enrollment, 'id' | 'studentName'>;