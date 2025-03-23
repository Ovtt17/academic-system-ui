import { useEffect, useState } from "react";
import AssignmentResponse from "../types/assignment";
import { getAssignmentById } from "../services/assignmentService";

const useFetchAssignmentById = (id: number) => {
  const [assignment, setAssignment] = useState<AssignmentResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        const assignment = await getAssignmentById(id);
        setAssignment(assignment);
      } catch (error: unknown) {
        setError(error instanceof Error ? error.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchAssignment();
  }, [id]);

  return { assignment, loading, error };
}


export default useFetchAssignmentById;