import { FC } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import { DayOfWeek } from '../../../types/courseSchedule';

const CourseScheduleInput: FC = () => {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'schedules'
  });

  const addSchedule = () => {
    append({ day: DayOfWeek.MONDAY, startTime: new Date(), endTime: new Date() });
  };

  return (
    <div className="space-y-6">
      <h4 className="text-lg font-semibold">Schedules</h4>
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-4 p-4 border border-gray-300 bg-card rounded-lg">
          <div className="flex justify-between items-center">
            <h5 className="text-md font-medium">Schedule {index + 1}</h5>
            <button type="button" onClick={() => remove(index)} className="text-sm text-red-600 hover:text-red-800">Remove</button>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium">Day</label>
            <select {...register(`schedules.${index}.day` as const)} className="w-full bg-gray-700 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500">
              {Object.keys(DayOfWeek)
                .filter((key) => isNaN(Number(key)))
                .map((dayName) => (
                  <option key={DayOfWeek[dayName as keyof typeof DayOfWeek]} value={DayOfWeek[dayName as keyof typeof DayOfWeek]}>
                    {dayName}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium">Start Time</label>
            <input type="time" {...register(`schedules.${index}.startTime` as const)} className="w-full bg-gray-700 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium">End Time</label>
            <input type="time" {...register(`schedules.${index}.endTime` as const)} className="w-full bg-gray-700 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500" />
          </div>
        </div>
      ))}
      <button type="button" onClick={addSchedule} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">Add Schedule</button>
    </div>
  );
};

export default CourseScheduleInput;