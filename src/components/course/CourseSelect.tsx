import { FC } from 'react';
import useFetchCourses from '../../hooks/useFetchCourses';
import SelectField from '../select/SelectField';
import ErrorDisplay from '../error/ErrorDisplay';

interface CourseSelectProps {
  name: string;
}

const CourseSelect: FC<CourseSelectProps> = ({ name }) => {
  const { courses, error, loading } = useFetchCourses();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <ErrorDisplay errors={error} />;
  }

  return (
    <SelectField
      label='Select a course'
      name={name}
      options={courses.map((course) => ({ label: course.name, value: course.id }))
      }
    />
  );
}

export default CourseSelect;