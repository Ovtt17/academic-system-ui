import { Dayjs } from "dayjs";

export default interface Student {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  gender: 'MALE' | 'FEMALE';
  dateOfBirth: Dayjs | null;
}