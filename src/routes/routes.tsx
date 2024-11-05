import { Route, Routes } from 'react-router-dom';
import Login from '../components/login/Login';
import Dashboard from '../pages/Dashboard';
import Calendar from '../pages/Calendar';
import ROUTES from '../constants/routes';
import Courses from '../pages/Course';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route path={ROUTES.CALENDAR} element={<Calendar />} />
      <Route path={ROUTES.COURSES} element={<Courses />} />
    </Routes>
  )
};

export default AppRoutes;