import { Teacher } from "./teacher";

export interface AuthenticationResponse {
  token: string;
  user: Teacher;
}