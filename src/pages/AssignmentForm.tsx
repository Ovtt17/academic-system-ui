import { useParams } from "react-router-dom";
import { AssignmentRequest } from "../types/assignment";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newAssignmentValidation } from "../validations/assignmentValidation";
import useFetchAssignmentById from "../hooks/useFetchAssignmentById";
import { createAssignment, updateAssignment } from "../services/assignmentService";
import { ProcessedError } from "../components/error/processErrorResponse";
import InputField from "../components/input/InputField";

const AssignmentForm = () => {
  const { id: selectedId } = useParams<{ id: string }>();
  const newAssigmentDefault: AssignmentRequest = {
    id: selectedId ? Number(selectedId) : 0,
    title: "",
    description: "",
    dueDate: new Date(),
    courseId: 0,
  }
  const { assignment } = useFetchAssignmentById(Number(selectedId));

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<ProcessedError | null>(null);


  const methods = useForm<AssignmentRequest>({
    defaultValues: newAssigmentDefault,
    resolver: zodResolver(newAssignmentValidation),
  });

  const handleSubmit: SubmitHandler<AssignmentRequest> = async (assignmentRequest) => {
    try {
      setIsSubmitting(true);
      const assignmentResult = selectedId
        ? await updateAssignment(Number(selectedId), assignmentRequest)
        : await createAssignment(assignmentRequest);
      methods.reset(assignmentResult);
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
      <header className="flex justify-between items-center pb-4 border-b border-gray-700">
        <h4 className="text-2xl md:text-3xl font-bold text-create-button">Create Assignment 📋</h4>
      </header>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
          <InputField name="title" label="Title" />
          <InputField name="description" label="Description" />
          <InputField name="dueDate" label="Due Date" type="date" />
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