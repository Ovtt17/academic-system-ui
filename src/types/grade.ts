export interface Grade {
  id: string;
  grade: number;
  comments?: string;
  assignmentId: number;
  courseId: number;
  teacherId: number;
  studentId: number;
}

export type NewGrade = Omit<Grade, 'id'>;