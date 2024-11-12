import { FormProvider, useForm } from 'react-hook-form';
import { NewCourse } from '../../types/course';
import CourseInputField from './form/CourseInputField';
import CourseTextAreaField from './form/CourseTextAreaField';
import CourseScheduleInput from './form/CourseScheduleInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { courseValidation } from '../../validations/courseValidation';
import { createCourse } from '../../services/courseService';

const CourseCreate = () => {
  const newCourseDefault: NewCourse = {
    name: "",
    description: "",
    section: "",
    semester: "",
    teacherId: 0,
    schedules: [],
  };

  const methods = useForm<NewCourse>({
    defaultValues: newCourseDefault,
    resolver: yupResolver(courseValidation),
  });

  const onsubmit = (data: NewCourse) => {
    createCourse(data);
  };

  return (
    <div className="bg-deep-navy p-6 min-h-screen shadow-md">
      <header className="flex justify-between items-center pb-4 border-b border-gray-700">
        <h4 className="text-lg font-semibold text-create-button">Create Course</h4>
      </header>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onsubmit)} className="space-y-5 pt-4 max-w-lg mx-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <CourseInputField name="name" label="Name" />
            <CourseInputField name="section" label="Section" />
            <CourseInputField name="semester" label="Semester" />
            <CourseInputField name="teacherId" label="Teacher ID" />
          </div>
          <CourseTextAreaField name="description" label="Description" />
          <CourseScheduleInput />
          <footer className="flex items-center justify-end pt-6 border-t border-gray-700">
            <button
              type="submit"
              className="py-2 px-6 bg-create-button text-white rounded-lg font-semibold shadow-md shadow-create-button transition hover:bg-indigo-400"
            >
              Create
            </button>
          </footer>
        </form>
      </FormProvider>
    </div>
  );
};

export default CourseCreate;
