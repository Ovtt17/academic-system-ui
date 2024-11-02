export interface CourseSchedule {
  id: number;
  day: string;
  startTime: Date;
  endTime: Date;
}

export type NewCourseSchedule = Omit<CourseSchedule, 'id'>;