export enum DayOfWeek {
  MONDAY = 1,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY
}
export default interface CourseSchedule {
  id: number;
  day: DayOfWeek;
  startTime: Date;
  endTime: Date;
}

export type NewCourseSchedule = Omit<CourseSchedule, 'id'>;