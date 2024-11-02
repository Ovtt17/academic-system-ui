import { Dayjs } from "dayjs";

export default interface Teacher {
  id: number;
  fullName: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  profilePicture?: string;
  dateOfBirth?: Dayjs | null;
  phone?: string;
  departament: string;
  specialization: string;
}

export type NewTeacher = Omit<Teacher, 'id'> & {
  password: string;
  confirmPassword: string;
}