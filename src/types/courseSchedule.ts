export enum DayOfWeek {
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
  SUNDAY = 'SUNDAY'
}
export default interface CourseSchedule {
  id: number;
  day: DayOfWeek;
  startTime: string;
  endTime: string;
}

export type NewCourseSchedule = Omit<CourseSchedule, 'id'>;