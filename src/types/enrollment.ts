export interface Enrollment {
  id: string;
  courseId: string;
  studentId: string;
  grade: number;
}

export type NewEnrollment = Omit<Enrollment, 'id'>;