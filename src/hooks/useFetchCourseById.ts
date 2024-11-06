import { useEffect, useState } from 'react';
import { getCourseById } from '../services/courseService';
import Course from '../types/course';

const useFetchCourseById = (id: string) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const course = await getCourseById(id);
        setCourse(course);
      } catch (error: unknown) {
        setError(error instanceof Error ? error.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  return { course, loading, error };
}

export default useFetchCourseById;