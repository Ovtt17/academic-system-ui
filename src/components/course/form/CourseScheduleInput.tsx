import { FC } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import ScheduleItem from './ScheduleItem';

const CourseScheduleInput: FC = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'schedules'
  });

  const addSchedule = () => {
    append({ day: 'MONDAY', startTime: '00:00', endTime: '00:00' });
  };

  return (
    <div className="space-y-6">
      <h4 className="text-lg font-semibold">Schedules</h4>
      {fields.map((field, index) => (
        <ScheduleItem key={field.id} index={index} remove={() => remove(index)} />
      ))}
      <button type="button" onClick={addSchedule} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
        Add Schedule
      </button>
    </div>
  );
};

export default CourseScheduleInput;