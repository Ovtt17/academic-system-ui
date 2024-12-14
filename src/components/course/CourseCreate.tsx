import { FormProvider, useForm } from 'react-hook-form';
import { NewCourse } from '../../types/course';
import CourseTextAreaField from './form/CourseTextAreaField';
import CourseScheduleInput from './form/CourseScheduleInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { courseValidation } from '../../validations/courseValidation';
import { createCourse } from '../../services/courseService';
import InputField from "../input/InputField.tsx";

const CourseCreate = () => {
  const newCourseDefault: NewCourse = {
    name: "",
    description: "",
    section: "",
    semester: "",
    schedules: [],
  };

  const methods = useForm<NewCourse>({
    defaultValues: newCourseDefault,
    resolver: yupResolver(courseValidation),
  });

  const onsubmit = (data: NewCourse) => {
    createCourse(data).then();
  };

  return (
    <article className="bg-deep-navy p-6 h-full shadow-md">
      <header className="flex justify-between items-center pb-4 border-b border-gray-700">
        <h4 className="text-2xl md:text-3xl font-bold text-create-button">Create Course 📖</h4>
      </header>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onsubmit)} className="space-y-5 pt-4 max-w-5xl mx-auto">
          <InputField name="name" label="Name" />
          <InputField name="section" label="Section" />
          <InputField name="semester" label="Semester" />
          <CourseTextAreaField name="description" label="Description" />
          <CourseScheduleInput />
          <div className="flex items-center justify-end pt-6 border-t border-gray-700">
            <button
              type="submit"
              className="py-2 px-6 bg-create-button text-white rounded-lg font-semibold shadow-md shadow-create-button transition hover:bg-indigo-400"
            >
              Create
            </button>
          </div>
        </form>
      </FormProvider>
    </article>
  );
};

export default CourseCreate;
