import { useNavigate, useParams } from "react-router-dom";
import { AssignmentRequest } from "../types/assignment";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newAssignmentValidation } from "../validations/assignmentValidation";
import useFetchAssignmentById from "../hooks/useFetchAssignmentById";
import { createAssignment, updateAssignment } from "../services/assignmentService";
import { ProcessedError } from "../components/error/processErrorResponse";
import InputField from "../components/input/InputField";
import toast, { Toaster } from "react-hot-toast";
import CourseSelect from "../components/course/CourseSelect";
import ErrorDisplay from "../components/error/ErrorDisplay";
import ROUTES from "../constants/routes";

const AssignmentForm = () => {
  const { id: selectedId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const newAssigmentDefault: AssignmentRequest = {
    id: selectedId ? Number(selectedId) : undefined,
    title: "",
    description: "",
    dueDate: new Date(),
    courseId: 0,
  }
  const { assignment } = selectedId
    ? useFetchAssignmentById(Number(selectedId))
    : { assignment: null };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<ProcessedError | null>(null);


  const methods = useForm<AssignmentRequest>({
    defaultValues: newAssigmentDefault,
    resolver: zodResolver(newAssignmentValidation),
  });

  const handleSubmit: SubmitHandler<AssignmentRequest> = async (assignmentRequest) => {
    try {
      toast.promise(async () => {
        selectedId
          ? await updateAssignment(Number(selectedId), assignmentRequest)
          : await createAssignment(assignmentRequest);
      },
        {
          loading: selectedId ? "Updating assignment" : "Creating assignment",
          success: selectedId ? "Assignment updated" : "Assignment created",
          error: "Error creating assignment",
        }
      ).then(() => {
        setTimeout(() => {
          navigate(ROUTES.ASSIGNMENTS);
        }, 1000);
      });

    } catch (error) {
      setError(error as ProcessedError);
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    if (assignment) {
      methods.reset(assignment);
    }
  }, [assignment]);

  return (
    <section className="bg-deep-navy p-6 h-full shadow-md">
      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
      <ErrorDisplay errors={error} />
      <header className="flex justify-between items-center pb-4 border-b border-gray-700">
        <h4 className="text-2xl md:text-3xl font-bold text-create-button">{selectedId ? 'Edit ' : 'Create '}Assignment 📋</h4>
      </header>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleSubmit)}
          className="flex flex-col gap-4 pt-4"
        >
          <InputField name="title" label="Title" />
          <InputField name="description" label="Description" />
          <InputField name="dueDate" label="Due Date" type="date" />
          <CourseSelect name="courseId" />
          <div className="flex items-center justify-end pt-6 border-t border-gray-700">
            <button
              type="submit"
              disabled={isSubmitting}
              className="py-2 px-6 bg-create-button text-white rounded-lg font-semibold shadow-md shadow-create-button transition hover:bg-indigo-400"
            >
              {isSubmitting ? "Submitting..." : selectedId ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </FormProvider>
    </section>
  );
}

export default AssignmentForm;