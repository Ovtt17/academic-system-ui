import { FC } from 'react';
import Course from '../../types/course';
import { CalendarDays, Clock } from 'lucide-react';

interface CourseCardSchedulesProps {
  course: Course;
}

const formatDay = (day: string) => {
  // Optionally, you can translate days here if needed
  return day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();
};

const formatTime = (time: string) => {
  return time.substring(0, 5);
};

const CourseCardSchedules: FC<CourseCardSchedulesProps> = ({ course }) => (
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
);

export default CourseCardSchedules;
