import { Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
const ROUTES = {
  // General Routes
  HOME: '/',
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
    <Routes>
      {/* General Routes */}
      <Route path={ROUTES.LOGIN} element={<Login />} />
    </Routes>
  )
};

export default AppRoutes;