  import CourseList from "../components/dashboard/CourseList";
  import PendingAssignments from "../components/dashboard/PendingAssignments";
  import TopStudents from "../components/dashboard/TopStudents";
  import WeeklyAverageChart from "../components/dashboard/WeeklyAverageChart";
  import useFetchDashboardData from "../hooks/useFetchDashboardData";

  const Dashboard = () => {
    const { data } = useFetchDashboardData();
    return (
      <section className="p-6 flex flex-col gap-6 text-gray-200">
        <CourseList courses={data.courses} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <WeeklyAverageChart data={data.weeklyScores || []} />
          <TopStudents students={data.students} />
        </div>
        <PendingAssignments pendingAssignments={data.pendingAssignments} />
      </section>
    )
  }

  export default Dashboard;