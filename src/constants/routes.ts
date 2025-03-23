const ROUTES = {
  // General Routes
  HOME: '/',
  DASHBOARD: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  ACTIVATE_ACCOUNT: '/activate-account',

  // Profile Routes
  PROFILE: '/:username',

  COURSES: '/courses',
  COURSE_CREATE: '/courses/create',
  COURSE_BY_ID: '/courses/:id',

  STUDENTS: '/students',
  STUDENT_CREATE: '/students/create',
  STUDENT_BY_ID: '/students/:id',

  ASSIGNMENTS: '/assignments',
  ASSIGNMENT_CREATE: '/assignments/create',
  ASSIGNMENT_BY_ID: '/assignments/:id',

  // Report Routes
  REPORTS: '/reports',

  SETTINGS: '/settings',
};

export default ROUTES;