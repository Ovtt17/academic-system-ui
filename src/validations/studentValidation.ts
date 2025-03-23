import { z } from 'zod';
import dayjs from 'dayjs';

export const studentValidation = z.object({
  firstName: z.string()
    .min(2, 'First name must be at least 2 characters long'),
  lastName: z.string()
    .min(2, 'Last name must be at least 2 characters long'),
  email: z.string()
    .email('Invalid email format'),
  address: z.string()
    .min(5, 'Address must be at least 5 characters long'),
  phone: z.number()
    .positive('Phone number must be a positive number')
    .int('Phone number must be an integer'),
  gender: z.enum(['MALE', 'FEMALE'], {
    errorMap: () => ({ message: 'Invalid gender selected' })
  }),
  dateOfBirth: z.custom<string>(value => dayjs(value).isValid(), {
    message: 'Invalid date of birth'
  })
});

export default studentValidation;
