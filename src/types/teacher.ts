import { Dayjs } from "dayjs";

interface BaseTeacher {
  username: string;
  firstName: string;
  lastName: string;
}

export interface Teacher extends BaseTeacher {
  fullName: string;
  profilePictureUrl?: string;
}

export interface NewTeacher extends BaseTeacher {
  dateOfBirth: Dayjs | null;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}