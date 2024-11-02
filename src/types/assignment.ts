interface BaseAssignment {
  title: string;
  description: string;
  dueDate: Date;
  classId: number;
}

export interface Assignment extends BaseAssignment {
  id: number;
  submissions: number;
}

export type NewAssignment = BaseAssignment;