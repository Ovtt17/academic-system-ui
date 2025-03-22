import CreateButton from "../components/buttons/CreateButton";
import AssignmentCard from "../components/course/AssignmentCard";
import ROUTES from "../constants/routes";
import useFetchAssignments from "../hooks/useFetchAssignments";

const Assignment = () => {
  const { assignments } = useFetchAssignments();

  return (
    <div className="h-full bg-deep-navy justify-center">
      <header>
        <h1 className="text-3xl font-semibold text-gray-100 p-6">
          Assignments
        </h1>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {assignments.map(assignment => (
          <AssignmentCard key={assignment.id} assignment={assignment} totalStudents={assignment.course.totalStudents}  />
        ))}
      </section>
      <div className="fixed bottom-5 right-10">
        <CreateButton
          redirectPath={ROUTES.ASSIGNMENT_CREATE}
        />
      </div>
    </div>
  );
}

export default Assignment;