import { useState } from "react";
import CreateButton from "../components/buttons/CreateButton";
import CourseCreateModal from "../components/course/CourseCreateModal";
import useFetchStudents from "../hooks/useFetchStudents";
import StudentCard from "../components/student/StudentCard";

const Student = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { students } = useFetchStudents();

  const showCreateModal = () => {
    setIsCreateModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsCreateModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {students.map(student => (
          <StudentCard key={student.id} student={student} />
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

export default Student;