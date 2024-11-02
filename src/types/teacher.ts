import { Dayjs } from "dayjs";

export interface Teacher {
  id: number;
  fullName: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  profilePicture?: string;
  dateOfBirth?: Dayjs | null;
  phone?: string;
}

export type NewTeacher = Omit<Teacher, 'id'> & {
  password: string;
  confirmPassword: string;
}