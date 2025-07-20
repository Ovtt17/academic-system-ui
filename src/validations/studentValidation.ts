import { z } from 'zod';
import dayjs from 'dayjs';

export const studentValidation = z.object({
  firstName: z.string()
    .min(2, 'First name must be at least 2 characters'),
  lastName: z.string()
    .min(2, 'Last name must be at least 2 characters'),
  email: z.string()
    .email('Invalid email format'),
  address: z.string()
    .min(5, 'Address must be at least 5 characters'),
  phone: z.string()
    .length(8, 'Phone number must be exactly 8 characters'),
  gender: z.enum(['MALE', 'FEMALE'], {
    errorMap: () => ({ message: 'Invalid gender selected' })
  }),
  dateOfBirth: z.custom<string>(value => dayjs(value).isValid(), {
    message: 'Invalid date of birth'
  })
});

export default studentValidation;
