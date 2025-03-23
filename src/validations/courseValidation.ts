import { z } from 'zod';
import { DayOfWeek } from '../types/courseSchedule';
import dayjs from 'dayjs';

const timeSchema = z.string().refine(value => dayjs(`1970-01-01T${value}:00`).isValid(), {
  message: 'Invalid time format',
});

export const courseValidation = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  description: z.string().min(10, 'Description must be at least 10 characters long'),
  section: z.string(),
  semester: z.string(),
  schedules: z.array(
    z.object({
      day: z.nativeEnum(DayOfWeek, {
        errorMap: () => ({ message: 'Invalid day selected' }),
      }),
      startTime: timeSchema,
      endTime: timeSchema.refine(function (this: { parent: { startTime: string } }, value) {
              const { startTime } = this.parent;
              return dayjs(`1970-01-01T${value}:00`).isAfter(dayjs(`1970-01-01T${startTime}:00`));
            }, {
              message: 'End Time must be after Start Time',
            }),
    })
  ).min(1, 'At least one schedule is required'),
});