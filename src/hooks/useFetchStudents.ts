import { useEffect, useState } from "react";
import Student from "../types/student";
import { getStudents } from "../services/studentService";

const useFetchStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStudents = async () => {
    try {
      const students = await getStudents();
      setStudents(students);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return { students, loading, error };
}

export default useFetchStudents;