import { useState } from "react";
import CreateButton from "../components/buttons/CreateButton";
import useFetchStudents from "../hooks/useFetchStudents";
import StudentCard from "../components/student/StudentCard";
import StudentCreateModal from "../components/student/StudentCreateModal";

const Student = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { students } = useFetchStudents();

  const handleCloseModal = () => {
    setIsCreateModalOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-deep-navy justify-center items-center">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {students.map(student => (
          <StudentCard key={student.id} student={student} />
        ))}
      </section>
      <div className="fixed bottom-5 right-10">
        <CreateButton
          redirectPath='/student/create'
        />
      </div>
      {isCreateModalOpen && (
        <StudentCreateModal
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default Student;