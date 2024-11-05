import { useState } from "react";
import CreateButton from "../components/buttons/CreateButton";
import CourseCard from "../components/course/CourseCard";
import useFetchCourses from "../hooks/useFetchCourses";
import CourseCreateModal from "../components/course/CourseCreateModal";

const Courses = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { courses } = useFetchCourses();

  const showCreateModal = () => {
    setIsCreateModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsCreateModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
      <div className="fixed bottom-5 right-10">
        <CreateButton
          handleCreate={showCreateModal}
        />
      </div>
      {isCreateModalOpen && (
        <CourseCreateModal
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default Courses;