import { FC } from 'react';
import Course from '../../types/course';
import { useNavigate } from 'react-router-dom';
import CourseCardHeader from './CourseCardHeader';
import CourseCardSectionSemester from './CourseCardSectionSemester';
import CourseCardSchedules from './CourseCardSchedules';
import CourseCardAssignments from './CourseCardAssignments';
import CourseCardTeacher from './CourseCardTeacher';

interface CourseCardProps {
  course: Course;
}


const CourseCard: FC<CourseCardProps> = ({ course }) => {
  const navigate = useNavigate();
  const totalStudents = course.totalStudents;

  const handleClick = () => {
    navigate(`/courses/${course.id}`);
  };


  return (
    <div
      onClick={handleClick}
      className="bg-gray-900 hover:ring-2 ring-indigo-500 transition cursor-pointer p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4 flex flex-col"
    >
      <CourseCardHeader course={course} />
      <CourseCardSectionSemester course={course} totalStudents={totalStudents} />
      <CourseCardSchedules course={course} />
      <CourseCardAssignments course={course} totalStudents={totalStudents} />
      <CourseCardTeacher course={course} />
    </div>
  );
};

export default CourseCard;