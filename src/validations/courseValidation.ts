import * as yup from 'yup';
import { DayOfWeek } from '../types/courseSchedule';
import dayjs from 'dayjs';

export const courseValidation = yup.object().shape({
  name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters long'),
  description: yup.string().required('Description is required').min(10, 'Description must be at least 10 characters long'),
  section: yup.string().required('Section is required'),
  semester: yup.string().required('Semester is required'),
  schedules: yup.array().of(
    yup.object().shape({
      day: yup.mixed<DayOfWeek>()
        .oneOf(Object.values(DayOfWeek), 'Invalid day selected')
        .required('Day is required'),
      startTime: yup.string().required('Start Time is required'),
      endTime: yup.string().required('End time is required').test('is-valid-time', 'Invalid end time', value => dayjs(`1970-01-01T${value}:00`).isValid())
        .test('is-after-start-time', 'End Time must be after Start Time', function (value) {
          const { startTime } = this.parent;
          return dayjs(`1970-01-01T${value}:00`).isAfter(dayjs(`1970-01-01T${startTime}:00`));
        })
    })
  ).required('Schedules are required').min(1, 'At least one schedule is required'),
});