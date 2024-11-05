import CourseCard from "../components/course/CourseCard";
import useFetchCourses from "../hooks/useFetchCourses";

const Courses = () => {
  const { courses } = useFetchCourses();

  return (
    <div className="flex justify-center items-center">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
    </div>
  );
}

export default Courses;