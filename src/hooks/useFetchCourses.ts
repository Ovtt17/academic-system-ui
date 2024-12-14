import { useEffect, useState } from "react";
import Course from "../types/course";
import { getCourses } from "../services/courseService";

const useFetchCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCourses = async () => {
    try {
      const courses = await getCourses();
      setCourses(courses);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses().then();
  }, []);

  return { courses, loading, error };
}

export default useFetchCourses;