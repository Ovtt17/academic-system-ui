import AppRoutes from './routes/routes';
import Navigation from './components/navigation/Navigation';
import { useState } from 'react';
import DashboardAside from './components/menu/DashboardAside';

function App() {
  const [isDashboardAsideVisible, setDashboardAsideVisible] = useState(false);

  const toggleDashboardAside = () => {
    setDashboardAsideVisible(!isDashboardAsideVisible);
  };

  return (
    <div className="h-screen min-h-screen flex overflow-hidden">
      <aside
        className={`transition-transform transform ${isDashboardAsideVisible ? 'translate-x-0' : '-translate-x-full'
          } w-72 bg-deep-navy text-white fixed inset-y-0 left-0 z-30`}
      >
        <DashboardAside />
      </aside>
      <div
        className={`flex flex-col flex-grow transition-transform duration-300 ${isDashboardAsideVisible ? 'ml-72' : 'ml-0'
          }`}
      >
        <header>
          <Navigation toggleDashboardAside={toggleDashboardAside} />
        </header>
        <main className="relative flex-grow overflow-y-auto">
          <AppRoutes />
        </main>
      </div>
    </div>
  );
}

export default App;