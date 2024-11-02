import { Dayjs } from "dayjs";

interface BaseTeacher {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  dateOfBirth?: Dayjs | null;
  phone?: string;
}

export interface Teacher extends BaseTeacher {
  id: number;
  fullName: string;
  profilePicture?: string;
}

export interface NewTeacher extends BaseTeacher {
  password: string;
  confirmPassword: string;
}