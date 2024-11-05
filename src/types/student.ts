import { Dayjs } from "dayjs";

export default interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: number;
  gender: 'MALE' | 'FEMALE';
  dateOfBirth: Dayjs | null;
}

export type NewStudent = Omit<Student, 'id'>;