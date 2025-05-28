import { FC } from 'react';
import Course from '../../types/course';
import { useNavigate } from 'react-router-dom';
import AssignmentCard from '../assignment/AssignmentCard';
import { CalendarDays, Clock, User } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

const formatDay = (day: string) => {
  return day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();
};

const formatTime = (time: string) => {
  return time.substring(0, 5); // "15:00"
};

const CourseCard: FC<CourseCardProps> = ({ course }) => {
  const navigate = useNavigate();
  const totalStudents = course.totalStudents;

  const handleClick = () => {
    navigate(`/courses/${course.id}`);
  };

  const upcomingAssignments = course.assignments?.filter(
    (a) => new Date(a.dueDate) > new Date()
  ) ?? [];

  return (
    <div
      onClick={handleClick}
      className="bg-gray-900 hover:ring-2 ring-indigo-500 transition cursor-pointer p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4 flex flex-col"
    >
      {/* Header */}
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

      {/* Section & Semester */}
      <div className="flex flex-wrap gap-2 text-sm">
        <span className="bg-indigo-700 text-white px-2 py-1 rounded-md">{course.section}</span>
        <span className="bg-gray-700 text-gray-100 px-2 py-1 rounded-md">{course.semester}</span>
        <span className="flex items-center gap-1 text-gray-400">
          <User size={16} /> {totalStudents} estudiante{totalStudents !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Horarios */}
      <div className="text-sm text-gray-300 space-y-1">
        {course.schedules.map((s) => (
          <div key={s.id} className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span>{formatDay(s.day)}:</span>
            <Clock size={16} />
            <span>
              {formatTime(s.startTime)} - {formatTime(s.endTime)}
            </span>
          </div>
        ))}
      </div>

      {/* Assignments */}
      <div className="mt-2">
        {upcomingAssignments.length > 0 ? (
          <>
            <p className="text-sm text-indigo-400 font-medium mb-1">
              Tareas pendientes ({upcomingAssignments.length})
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
                  Y {upcomingAssignments.length - 2} más...
                </p>
              )}
            </div>
          </>
        ) : (
          <p className="text-sm text-gray-500 italic">No hay tareas pendientes</p>
        )}
      </div>

      {/* Docente */}
      <div className="border-t border-gray-700 pt-3 text-sm text-gray-400">
        <p className="font-medium text-white">{course.teacher.fullName}</p>
        <p>{course.teacher.email}</p>
      </div>
    </div>
  );
};

export default CourseCard;