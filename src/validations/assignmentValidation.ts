import { z } from "zod";

export const newAssignmentValidation = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  dueDate: z.date({ invalid_type_error: "Invalid date" }),
  courseId: z.number(),
});