import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

interface CourseTextAreaFieldProps {
  name: string;
  label: string;
}

const CourseTextAreaField: FC<CourseTextAreaFieldProps> = ({ name, label }) => {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name];
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-xl md:text-2xl font-bold text-gray-300">{label}</label>
      <textarea
        id={name}
        {...register(name)}
        className="w-full bg-card border border-gray-600 rounded-lg px-3 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-create-button"
      ></textarea>
      {error && <p className="text-red-500 text-xs mt-1">{String(error.message)}</p>}
    </div>
  );
}

export default CourseTextAreaField;