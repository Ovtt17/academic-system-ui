import CreateButton from "../components/buttons/CreateButton";
import CourseCard from "../components/course/CourseCard";
import useFetchCourses from "../hooks/useFetchCourses";

const Courses = () => {
  const { courses } = useFetchCourses();

  return (
    <div className="flex h-full bg-deep-navy justify-center items-center">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
      <div className="fixed bottom-5 right-10">
        <CreateButton
          redirectPath="/courses/create"
        />
      </div>
    </div>
  );
}

export default Courses;