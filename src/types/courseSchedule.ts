export default interface CourseSchedule {
  id: number;
  day: Date;
  startTime: Date;
  endTime: Date;
}

export type NewCourseSchedule = Omit<CourseSchedule, 'id'>;