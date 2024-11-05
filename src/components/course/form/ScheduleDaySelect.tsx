import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { DayOfWeek } from '../../../types/courseSchedule';

interface ScheduleDaySelectProps {
  index: number;
  name: string;
}

const ScheduleDaySelect: FC<ScheduleDaySelectProps> = ({ index, name }) => {
  const { register, formState: { errors } } = useFormContext();

  const dayError = Array.isArray(errors.schedules) ? errors.schedules[index]?.day : undefined;

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium">Day</label>
      <select
        {...register(name, {
          required: 'Please select a day.',
          validate: value => Object.values(DayOfWeek).includes(value as DayOfWeek) || 'Invalid day selected.'
        })}
        className="w-full bg-gray-700 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
      >
        {Object.keys(DayOfWeek)
          .filter(key => isNaN(Number(key)))
          .map(dayName => (
            <option
              key={dayName}
              value={DayOfWeek[dayName as keyof typeof DayOfWeek]}
            >
              {dayName}
            </option>
          ))}
      </select>
      {dayError && (
        <p className="text-sm text-red-500">{dayError.message}</p>
      )}
    </div>
  );
};

export default ScheduleDaySelect;
