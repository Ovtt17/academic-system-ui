import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import dayjs from 'dayjs';

interface ScheduleTimeInputProps {
  name: string;
  label: string;
}

const ScheduleTimeInput: FC<ScheduleTimeInputProps> = ({ name, label }) => {
  const { register, formState: { errors } } = useFormContext();

  // Validación de la hora
  const validateTime = (value: string) => dayjs(`1970-01-01T${value}:00`).isValid() || 'Invalid time format';

  // Acceder al error de forma segura
  const timeError = Array.isArray(errors.schedules) ? errors.schedules[parseInt(name.split('.')[1])]?.[name.split('.')[2]] : undefined;

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium">{label}</label>
      <input
        type="time"
        {...register(name, {
          required: `Please enter a ${label.toLowerCase()}.`,
          validate: validateTime
        })}
        className="w-full bg-gray-700 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
      />
      {timeError && (
        <p className="text-sm text-red-500">{timeError.message}</p>
      )}
    </div>
  );
};

export default ScheduleTimeInput;
