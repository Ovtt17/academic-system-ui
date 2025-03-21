import { Dayjs } from "dayjs";

export default interface User {
  id: string;
  fullName: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  profilePicture?: string;
  dateOfBirth?: Dayjs | null;
  phone?: string;
}