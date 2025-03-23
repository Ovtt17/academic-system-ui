import { FC } from 'react';
import Course from '../../types/course';
import AssignmentCard from '../assignment/AssignmentCard';
import { useNavigate } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
}

const CourseCard: FC<CourseCardProps> = ({ course }) => {
  const navigate = useNavigate();
  const totalStudents = course.totalStudents;

  const handleCourseClick = () => {
    navigate(`/courses/${course.id}`);
  };

  return (
    <div onClick={handleCourseClick} className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm cursor-pointer">
      <h3 className="text-2xl font-semibold text-gray-100 mb-2">{course.name}</h3>
      <p className="text-gray-400 mb-4">{course.description}</p>
      <div className="space-y-4 overflow-y-auto">
        {course.assignments?.length ? (
          course.assignments
            .filter(assignment => assignment.dueDate > new Date())
            .map(assignment => (
            <AssignmentCard
              key={assignment.id}
              assignment={assignment}
              totalStudents={totalStudents}
            />
          ))
        ) : (
          <p className="text-gray-400 italic">No hay tareas pendientes</p>
        )}
      </div>
    </div>
  );
}

export default CourseCard;