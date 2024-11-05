import { FC } from 'react';
import { NewStudent } from '../../types/student';
import dayjs from 'dayjs';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import studentValidation from '../../validations/studentValidation';
import { createStudent } from '../../services/studentService';
import StudentInputField from './form/StudentInputField';
import StudentSelectField from './form/StudentSelectField';

interface StudentCreateModalProps {
  onClose: () => void;
}

const StudentCreateModal: FC<StudentCreateModalProps> = ({ onClose }) => {
  const newCourseDefault: NewStudent = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: 0,
    gender: 'MALE',
    dateOfBirth: dayjs(),
  };

  const methods = useForm<NewStudent>({
    defaultValues: newCourseDefault,
    resolver: yupResolver(studentValidation),
  });

  const onsubmit = (data: NewStudent) => {
    createStudent(data);
  }

  return (
    <article className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
      <div className='bg-deep-navy rounded-2xl py-4 px-5 w-3/4 max-h-full overflow-y-auto'>
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <h4 className="text-sm font-medium">Create Course</h4>
          <button className="cursor-pointer" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.75732 7.75739L16.2426 16.2427M16.2426 7.75739L7.75732 16.2427" stroke="black" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onsubmit)} className='space-y-4 px-2 max-h-[calc(100vh-10rem)] overflow-y-auto'>
            <StudentInputField name='firstName' label='First Name' />
            <StudentInputField name='lastName' label='Last Name' />
            <StudentInputField name='email' label='Email' />
            <StudentInputField name='address' label='Address' />
            <StudentInputField name='phone' label='Phone' type='number' />
            <StudentSelectField name='gender' label='Gender' options={[{ value: 'MALE', label: 'Male' }, { value: 'FEMALE', label: 'Female' }]} />
            <StudentInputField name='dateOfBirth' label='Date of Birth' type='date' />

            <div className="flex items-center justify-end pt-4 border-t border-gray-200 space-x-4">
              <button
                type="button"
                className="py-2.5 px-5 text-xs bg-indigo-50 text-indigo-500 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-100"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2.5 px-5 text-xs bg-indigo-500 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
              >
                Create
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </article>
  );
}

export default StudentCreateModal;