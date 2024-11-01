import { Assignment } from "./assignment";

export interface Class {
  id: number;
  name: string;
  description: string;
  assignments: Assignment[];
}