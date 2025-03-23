import CreateButton from "../components/buttons/CreateButton";
import useFetchStudents from "../hooks/useFetchStudents";
import StudentCard from "../components/student/StudentCard";
import ROUTES from "../constants/routes.ts";

const Student = () => {
  const { students } = useFetchStudents();

  return (
    <div className="h-full bg-deep-navy justify-center">
      <header>
        <h1 className="text-3xl font-semibold text-gray-100 p-6">
          Students
        </h1>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {students.map(student => (
          <StudentCard key={student.id} student={student} />
        ))}
      </section>
      <div className="fixed bottom-5 right-10">
        <CreateButton
          redirectPath={ROUTES.STUDENT_CREATE}
        />
      </div>
    </div>
  );
}

export default Student;