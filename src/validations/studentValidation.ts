import * as yup from 'yup';
import dayjs, { Dayjs } from 'dayjs';

export const studentValidation = yup.object().shape({
  firstName: yup.string().required('First name is required').min(2, 'First name must be at least 2 characters long'),
  lastName: yup.string().required('Last name is required').min(2, 'Last name must be at least 2 characters long'),
  email: yup.string().required('Email is required').email('Invalid email format'),
  address: yup.string().required('Address is required').min(5, 'Address must be at least 5 characters long'),
  phone: yup.number().required('Phone number is required').positive('Phone number must be a positive number').integer('Phone number must be an integer'),
  gender: yup.mixed<'MALE' | 'FEMALE'>().oneOf(['MALE', 'FEMALE'], 'Invalid gender selected').required('Gender is required'),
  dateOfBirth: yup.mixed<Dayjs>().required('Date of birth is required').test('is-valid-date', 'Invalid date of birth', value => dayjs(value).isValid())
});

export default studentValidation;