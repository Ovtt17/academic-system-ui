import { FC } from 'react';
import CourseCard from './CourseCard';
import { TeachersCourseDetails } from '../../types/dashboardData';

interface CourseListProps {
  courses: TeachersCourseDetails[];
}

const CourseList: FC<CourseListProps> = ({ courses }) => {

  if (!courses.length) {
    return <p className="text-gray-400">No courses found</p>;
  }
  return (
    <article className="grid grid-cols-4 gap-4">
      {courses.map(course => (
        <CourseCard
          key={course.id}
          id={course.id}
          name={course.name}
          description={course.description}
        />
      ))}
    </article>
  );
}

export default CourseList;