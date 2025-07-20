import CreateButton from "../components/buttons/CreateButton";
import CourseCard from "../components/course/CourseCard";
import useFetchCourses from "../hooks/useFetchCourses";
import ROUTES from "../constants/routes.ts";

const Courses = () => {
  const { courses } = useFetchCourses();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-deep-navy to-black">
      <header>
        <h1 className="text-3xl font-semibold text-gray-100 p-6">
          Courses
        </h1>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
      <div className="fixed bottom-5 right-10">
        <CreateButton
          redirectPath={ROUTES.COURSE_CREATE}
        />
      </div>
    </div>
  );
}

export default Courses;