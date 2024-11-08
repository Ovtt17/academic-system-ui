export interface TeachersCourseDetails {
  id: number;
  name: string;
  description: string;
}

export interface TopStudent {
  id: number;
  name: string;
  average: number;
}

export interface WeeklyScoreByCourse {
  week: number;
  score: number;
  courseName: string;
}

export interface PendingAssignment {
  id: number;
  title: string;
  dueDate: string;
  submissions: number;
  totalStudents: number;
}

export interface DashboardData {
  courses: TeachersCourseDetails[];
  students: TopStudent[];
  pendingAssignments: PendingAssignment[];
  weeklyScores: WeeklyScoreByCourse[];
}