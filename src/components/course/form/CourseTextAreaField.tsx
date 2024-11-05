import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

interface CourseTextAreaFieldProps {
  name: string;
  label: string;
}

const CourseTextAreaField: FC<CourseTextAreaFieldProps> = ({ name, label }) => {
  const { register } = useFormContext();

  return (
    <div className="space-y-1">
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <textarea id={name} {...register(name)} className="w-full bg-card border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-500"></textarea>
    </div>
  );
}

export default CourseTextAreaField;