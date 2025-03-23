import { useEffect, useState } from "react";
import Course from "../types/course";
import { getCourses } from "../services/courseService";
import { ProcessedError } from "../components/error/processErrorResponse";

const useFetchCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ProcessedError | null>(null);

  const fetchCourses = async () => {
    try {
      const courses = await getCourses();
      setCourses(courses);
    } catch (error: unknown) {
      setError(error as ProcessedError);
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