import { useEffect, useState } from "react";
import Assignment from "../types/assignment";
import { getAssignments } from "../services/assignmentService";

const useFetchAssignments = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAssignments = async () => {
    try {
      const assignments = await getAssignments();
      setAssignments(assignments);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return { assignments, loading, error };
}

export default useFetchAssignments;