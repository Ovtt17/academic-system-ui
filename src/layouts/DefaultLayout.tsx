import { FC, ReactNode, useState } from "react";
import DashboardAside from "../components/menu/DashboardAside";
import Navigation from "../components/navigation/Navigation";

const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDashboardAside = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="h-screen min-h-screen flex overflow-hidden bg-deep-navy text-white">
      <DashboardAside isSidebarOpen={sidebarOpen} />
      <div
        className={`flex flex-col flex-grow transition-transform duration-300 ${sidebarOpen ? 'ml-72' : 'ml-0'
          }`}
      >
        <Navigation toggleDashboardAside={toggleDashboardAside} />
        <main className="relative flex-grow overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;