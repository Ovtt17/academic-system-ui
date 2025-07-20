import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import { NewCourse } from '../../types/course';
import CourseTextAreaField from './form/CourseTextAreaField';
import CourseScheduleInput from './form/CourseScheduleInput';
import { courseValidation } from '../../validations/courseValidation';
import {createCourse, updateCourse} from '../../services/courseService';
import InputField from "../input/InputField.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import {useEffect, useState} from "react";
import {ProcessedError} from "../error/processErrorResponse.ts";
import toast, {Toaster} from "react-hot-toast";
import {useNavigate, useParams} from "react-router-dom";
import ROUTES from "../../constants/routes.ts";
import ErrorDisplay from "../error/ErrorDisplay.tsx";
import useFetchCourseById from "../../hooks/useFetchCourseById.ts";

const CourseCreate = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<ProcessedError | null>(null);

  const newCourseDefault: NewCourse = {
    id: selectedId ? Number(selectedId) : undefined,
    name: "",
    description: "",
    section: "",
    semester: "",
    schedules: [],
  };

  const methods = useForm<NewCourse>({
    defaultValues: newCourseDefault,
    resolver: zodResolver(courseValidation),
  });

  const { course } = useFetchCourseById(selectedId ?? null);

  useEffect(() => {
    if (id) {
      setSelectedId(Number(id));
    }
  }, [id]);

  useEffect(() => {
    if (course) {
      methods.reset(course);
    }
  }, [course, methods]);

  const handleSubmit: SubmitHandler<NewCourse> = async (course) => {
    setIsSubmitting(true);
    try {
      await toast.promise(
        selectedId
        ? updateCourse(selectedId, course)
        : createCourse(course),
        {
            loading: selectedId ? "Actualizando curso" : "Creando curso",
            success: selectedId ? "Curso actualizado" : "Curso creado",
            error: "Error creando curso",
        }
      );
      setTimeout(() => {
        navigate(ROUTES.COURSES);
      }, 1000);
    } catch (e) {
      setError(e as ProcessedError);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <article className="bg-deep-navy p-6 h-full shadow-md">
      <Toaster />
      <ErrorDisplay errors={error} />
      <header className="flex justify-between items-center pb-4 border-b border-gray-700">
        <h4 className="text-2xl md:text-3xl font-bold text-create-button">Create Course 📖</h4>
      </header>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)} className="space-y-5 pt-4 max-w-5xl mx-auto">
          <InputField name="name" label="Name" />
          <InputField name="section" label="Section" />
          <InputField name="semester" label="Semester" />
          <CourseTextAreaField name="description" label="Description" />
          <CourseScheduleInput />
          <div className="flex items-center justify-end pt-6 border-t border-gray-700">
            <button
              type="submit"
              disabled={isSubmitting}
              className="py-2 px-6 bg-create-button text-white rounded-lg font-semibold shadow-md shadow-create-button transition hover:bg-indigo-400"
            >
              {isSubmitting ? "Enviando..." : selectedId ? "Actualizar" : "Crear"}
            </button>
          </div>
        </form>
      </FormProvider>
    </article>
  );
};

export default CourseCreate;