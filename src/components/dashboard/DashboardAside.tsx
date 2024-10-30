import UserCard from "./UserCard";

const DashboardAside = () => {
  return (
    <div className="fixed flex-grow top-0 left-0 w-72 h-full bg-deep-navy text-white transition-transform">
      <section className="flex flex-col p-4 gap-4">
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <UserCard />
      </section>
    </div>
  );
}

export default DashboardAside;