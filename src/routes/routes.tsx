import { Route, Routes } from 'react-router-dom';
import Login from '../components/login/Login';
import Home from '../pages/Home';
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
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
    </Routes>
  )
};

export default AppRoutes;