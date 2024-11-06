import CourseSchedule, { DayOfWeek } from '../../types/courseSchedule';
import EditButton from './EditButton';

interface ScheduleListProps {
  schedules: CourseSchedule[];
  onEdit: (section: string) => void;
}

const ScheduleList: React.FC<ScheduleListProps> = ({ schedules, onEdit }) => (
  <div className="bg-gray-800 bg-opacity-70 p-6 rounded-xl shadow-lg relative border border-gray-700 hover:shadow-xl transition duration-200">
    <h2 className="text-xl font-medium text-blue-400 mb-4">Schedule</h2>
    <ul className="space-y-2">
      {schedules.map((schedule) => (
        <li key={schedule.id} className="flex justify-between items-center text-white">
          <span>{DayOfWeek[schedule.day as keyof typeof DayOfWeek]}</span>
          <span>{schedule.startTime} - {schedule.endTime} 🕒</span>
        </li>
      ))}
    </ul>
    <EditButton onClick={() => onEdit('Schedule')} />
  </div>
);

export default ScheduleList;
