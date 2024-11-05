import { FC } from 'react';
import ScheduleDaySelect from './ScheduleDaySelect';
import ScheduleTimeInput from './ScheduleTimeInput';

interface ScheduleItemProps {
  index: number;
  remove: () => void;
}

const ScheduleItem: FC<ScheduleItemProps> = ({ index, remove }) => (
  <div className="space-y-4 p-4 border border-gray-300 bg-card rounded-lg">
    <div className="flex justify-between items-center">
      <h5 className="text-md font-medium">Schedule {index + 1}</h5>
      <button type="button" onClick={remove} className="text-sm text-red-600 hover:text-red-800">
        Remove
      </button>
    </div>
    <ScheduleDaySelect name={`schedules.${index}.day`} index={index} />
    <ScheduleTimeInput name={`schedules.${index}.startTime`} label="Start Time" />
    <ScheduleTimeInput name={`schedules.${index}.endTime`} label="End Time" />
  </div>
);

export default ScheduleItem;