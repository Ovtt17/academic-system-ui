import { Route, Routes } from 'react-router-dom';
import Login from '../components/login/Login';
import Dashboard from '../pages/Dashboard';
const ROUTES = {
  // General Routes
  DASHBOARD: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  ACTIVATE_ACCOUNT: '/activate-account',

  // Profile Routes
  PROFILE: '/:username',

  // Report Routes
  REPORTS: '/reports',
};

const AppRoutes = () => {
  return (
    <main className="relative p-2 flex flex-col">
    <Routes>
      {/* General Routes */}
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
    </Routes>
    </main>
  )
};

export default AppRoutes;