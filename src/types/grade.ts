export interface Grade {
  id: string;
  grade: number;
  comments?: string;
  courseId: string;
  teacherId: string;
  studentId: string;
}

export type NewGrade = Omit<Grade, 'id'>;