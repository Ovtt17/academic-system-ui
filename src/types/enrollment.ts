export default interface Enrollment {
  id: string;
  courseId: string;
  studentFullName: string;
  grade: number;
}

export type NewEnrollment = Omit<Enrollment, 'id'> & {
  studentId: string;
};