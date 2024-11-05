import { FC } from 'react';
import Course from '../../types/course';

interface CourseCardProps {
  course: Course;
}

const CourseCard: FC<CourseCardProps> = ({ course }) => {
  const totalStudents = course.students.length;

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm">
      <h3 className="text-2xl font-semibold text-gray-100 mb-2">{course.name}</h3>
      <p className="text-gray-400 mb-4">{course.description}</p>
      <div className="space-y-4">
        {course.assignments?.length ? (
          course.assignments.map((assignment) => {
            const submissionPercentage = (assignment.submissions / totalStudents) * 100;

            return (
              <div key={assignment.id} className="bg-gray-700 p-4 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-200">{assignment.title}</span>
                  <span className="text-sm text-gray-400">Vence: {assignment.dueDate.toISOString()}</span>
                </div>
                <div className="text-sm text-gray-300 mb-1">
                  Entregas: {assignment.submissions}/{totalStudents}
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-green-500 h-full rounded-full"
                    style={{ width: `${submissionPercentage}%` }}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-400 italic">No hay tareas pendientes</p>
        )}
      </div>
    </div>
  );
}

export default CourseCard;