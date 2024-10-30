import AppRoutes from './routes/routes';
import Navigation from './components/navigation/Navigation';
import { useState } from 'react';
import DashboardAside from './components/dashboard/DashboardAside';
function App() {
  const [isDashboardAsideVisible, setDashboardAsideVisible] = useState(false);

  const toggleDashboardAside = () => {
    setDashboardAsideVisible(!isDashboardAsideVisible);
  };

  return (
    <div className="h-screen min-h-screen flex">
      {isDashboardAsideVisible && (
        <aside className="transition-transform w-72 bg-deep-navy text-white">
          <DashboardAside />
        </aside>
      )}
      <div className="flex flex-col flex-grow">
        <header>
          <Navigation toggleDashboardAside={toggleDashboardAside} />
        </header>

        <main className="relative flex-grow">
          <AppRoutes />
        </main>
      </div>
    </div>
  )
}

export default App
