import { FC } from 'react';
import Course from '../../types/course';

interface CourseCardHeaderProps {
  course: Course;
}

const CourseCardHeader: FC<CourseCardHeaderProps> = ({ course }) => (
  <div className="flex items-start justify-between">
    <div className="flex-1">
      <h3 className="text-2xl font-bold text-white">{course.name}</h3>
      <p className="text-sm text-gray-400">{course.description}</p>
    </div>
    {course.teacher?.profilePicture && (
      <img
        src={course.teacher.profilePicture}
        alt={course.teacher.fullName}
        className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500"
      />
    )}
  </div>
);

export default CourseCardHeader;
