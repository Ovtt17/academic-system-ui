import { FC } from 'react';
import Course from '../../types/course';

interface CourseCardTeacherProps {
  course: Course;
}

const CourseCardTeacher: FC<CourseCardTeacherProps> = ({ course }) => (
  <div className="border-t border-gray-700 pt-3 text-sm text-gray-400">
    <p className="font-medium text-white">{course.teacher.fullName}</p>
    <p>{course.teacher.email}</p>
  </div>
);

export default CourseCardTeacher;
