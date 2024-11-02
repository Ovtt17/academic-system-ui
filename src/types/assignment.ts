export interface Assignment {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  courseId: number;
  submissions: number;
}

export type NewAssignment = Omit<Assignment, 'id' | 'submissions'>;