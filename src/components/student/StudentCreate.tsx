import {NewStudent} from "../../types/student.ts";
import dayjs from "dayjs";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import studentValidation from "../../validations/studentValidation.ts";
import {createStudent} from "../../services/studentService.ts";
import StudentSelectField from "./form/StudentSelectField.tsx";
import InputField from "../input/InputField.tsx";

const StudentCreate = () => {
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
    createStudent(data).then();
  }

  return (
    <article className="bg-deep-navy p-6 h-full shadow-md">
      <header className="flex justify-between items-center pb-4 border-b border-gray-700">
        <h4 className="text-2xl md:text-3xl font-bold text-create-button">Register Student 🧑‍💻</h4>
      </header>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onsubmit)}
              className='grid grid-cols-2 max-md:grid-cols-1 gap-4'>
          <InputField name='firstName' label='First Name'/>
          <InputField name='lastName' label='Last Name'/>
          <InputField name='email' label='Email'/>
          <InputField name='address' label='Address'/>
          <InputField name='phone' label='Phone'/>
          <StudentSelectField name='gender' label='Gender'
                              options={[{value: 'MALE', label: 'Male'}, {value: 'FEMALE', label: 'Female'}]}/>
          <InputField name='dateOfBirth' label='Date of Birth' type='date'/>
          <div className="flex items-center justify-end pt-6 border-t border-gray-700">
            <button
              type="submit"
              className="py-2 px-6 bg-create-button text-white rounded-lg font-semibold shadow-md shadow-create-button transition hover:bg-indigo-400"
            >
              Create
            </button>
          </div>
        </form>
        <div className='grid grid-cols-3 md:grid-cols-1'>

        </div>
      </FormProvider>
    </article>
  );
}

export default StudentCreate;