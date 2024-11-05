import { FC } from "react";
import { useFormContext } from "react-hook-form";

interface CourseInputFieldProps {
  name: string;
  label: string;
  type?: string;
}

const CourseInputField: FC<CourseInputFieldProps> = ({ name, label, type }) => {
  const { register } = useFormContext();
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <input type={type} id={name} {...register(name)} className="w-full bg-card border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-500" />
    </div>
  );
}

export default CourseInputField;