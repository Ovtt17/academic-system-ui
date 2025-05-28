import { FC } from 'react';
import Course from '../../types/course';
import { User } from 'lucide-react';

interface CourseCardSectionSemesterProps {
  course: Course;
  totalStudents: number;
}

const CourseCardSectionSemester: FC<CourseCardSectionSemesterProps> = ({ course, totalStudents }) => (
  <div className="flex flex-wrap gap-2 text-sm">
    <span className="bg-indigo-700 text-white px-2 py-1 rounded-md">{course.section}</span>
    <span className="bg-gray-700 text-gray-100 px-2 py-1 rounded-md">{course.semester}</span>
    <span className="flex items-center gap-1 text-gray-400">
      <User size={16} /> {totalStudents} student{totalStudents !== 1 ? 's' : ''}
    </span>
  </div>
);

export default CourseCardSectionSemester;
