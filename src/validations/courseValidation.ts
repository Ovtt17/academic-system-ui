import * as yup from 'yup';

export const courseValidation = yup.object().shape({
  name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters long'),
  description: yup.string().required('Description is required').min(10, 'Description must be at least 10 characters long'),
  section: yup.string().required('Section is required'),
  semester: yup.string().required('Semester is required'),
  teacherId: yup.number().required('Teacher ID is required').positive('Teacher ID must be a positive number').integer('Teacher ID must be an integer'),
  schedules: yup.array().of(
    yup.object().shape({
      day: yup.date().required('Day is required'),
      startTime: yup.date().required('Start Time is required'),
      endTime: yup.date().required('End Time is required').min(yup.ref('startTime'), 'End Time must be after Start Time'),
    })
  ).required('Schedules are required').min(1, 'At least one schedule is required'),
});