const ROUTES = {
  // General Routes
  DASHBOARD: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  ACTIVATE_ACCOUNT: '/activate-account',

  // Profile Routes
  PROFILE: '/:username',

  CALENDAR: '/calendar',

  COURSES: '/courses',
  COURSE_CREATE: '/courses/create',
  COURSE: '/courses/:id',

  STUDENTS: '/students',
  STUDENT_CREATE: '/students/create',
  STUDENT: '/students/:id',

  // Report Routes
  REPORTS: '/reports',

  SETTINGS: '/settings',
};

export default ROUTES;