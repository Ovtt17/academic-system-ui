import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from "react";
import ROUTES from "../constants/routes";
import Loader from '../components/loader/Loader';
import { useAuth } from '../context/AuthContext';
import Assignment from '../pages/Assignment';

const Login = lazy(() => import("../components/login/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Courses = lazy(() => import("../pages/Course"));
const Student = lazy(() => import("../pages/Student"));
const Report = lazy(() => import("../pages/Report"));
const CourseDetails = lazy(() => import("../components/course/CourseDetails"));
const CourseCreate = lazy(() => import("../components/course/CourseCreate"));
const StudentCreate = lazy(() => import("../components/student/StudentCreate"));

const AppRoutes = () => {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />

        {isAuthenticated && user ? (
          <>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTES.REPORTS} element={<Report />} />
            <Route path={ROUTES.COURSES} element={<Courses />} />
            <Route path={ROUTES.COURSE_CREATE} element={<CourseCreate />} />
            <Route path={ROUTES.COURSE_BY_ID} element={<CourseDetails />} />
            <Route path={ROUTES.STUDENTS} element={<Student />} />
            <Route path={ROUTES.STUDENT_CREATE} element={<StudentCreate />} />

            <Route path={ROUTES.ASSIGNMENTS} element={<Assignment />} />
            <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to={ROUTES.LOGIN} />} />
        )}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;