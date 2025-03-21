import User from "./user";

export interface Teacher extends User {
  departament: string;
  specialization: string;
}

export type NewTeacher = Omit<Teacher, 'id'> & {
  password: string;
  confirmPassword: string;
}