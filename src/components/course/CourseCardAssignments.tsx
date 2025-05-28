import { FC } from 'react';
import Course from '../../types/course';
import AssignmentCard from '../assignment/AssignmentCard';

interface CourseCardAssignmentsProps {
  course: Course;
  totalStudents: number;
}

const CourseCardAssignments: FC<CourseCardAssignmentsProps> = ({ course, totalStudents }) => {
  const upcomingAssignments = course.assignments?.filter(
    (a) => new Date(a.dueDate) > new Date()
  ) ?? [];

  return (
    <div className="mt-2">
      {upcomingAssignments.length > 0 ? (
        <>
          <p className="text-sm text-indigo-400 font-medium mb-1">
            Pending assignments ({upcomingAssignments.length})
          </p>
          <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
            {upcomingAssignments.slice(0, 2).map((assignment) => (
              <AssignmentCard
                key={assignment.id}
                assignment={assignment}
                totalStudents={totalStudents}
              />
            ))}
            {upcomingAssignments.length > 2 && (
              <p className="text-xs text-gray-500 italic">
                And {upcomingAssignments.length - 2} more...
              </p>
            )}
          </div>
        </>
      ) : (
        <p className="text-sm text-gray-500 italic">No pending assignments</p>
      )}
    </div>
  );
};

export default CourseCardAssignments;
