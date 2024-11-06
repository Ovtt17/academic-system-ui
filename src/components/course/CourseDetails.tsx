import { useParams } from 'react-router-dom';
import useFetchCourseById from '../../hooks/useFetchCourseById';
import CourseHeader from './CourseHeader';
import TeacherInfo from './TeacherInfo';
import ScheduleList from './ScheduleList';
import AssignmentList from './AssignmentList';
import TotalStudents from './TotalStudents';

const CourseDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { course, loading, error } = useFetchCourseById(id as string);

  if (loading) return <p className="text-center text-gray-200">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!course) return <p className="text-center text-gray-200">Course not found.</p>;

  const handleEditClick = (section: string) => {
    console.log(`Edit ${section}`);
  };

  return (
    <section className="p-4 md:p-8 bg-deep-navy text-gray-200">
      <div className="w-full max-w-3xl mx-auto space-y-6">
        <CourseHeader
          name={course.name}
          description={course.description}
          section={course.section}
          semester={course.semester}
          onEdit={handleEditClick}
        />
        <TeacherInfo
          profilePicture={course.teacher.profilePicture || ''}
          fullName={course.teacher.fullName}
          email={course.teacher.email}
          department={course.teacher.departament}
          specialization={course.teacher.specialization}
          onEdit={handleEditClick}
        />
        <ScheduleList
          schedules={course.schedules}
          onEdit={handleEditClick}
        />
        {course.assignments && (
          <AssignmentList
            assignments={course.assignments}
            onEdit={handleEditClick}
          />
        )}
        <TotalStudents
          totalStudents={course.totalStudents}
          onEdit={handleEditClick}
        />
      </div>
    </section>
  );
};

export default CourseDetails;