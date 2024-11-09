import { Bars3Icon } from "@heroicons/react/24/solid"
import { FC } from "react";
import mainMenuItems from "../../data/mainMenuItems";
import NavButton from "./NavButton";

interface NavigationProps {
  toggleDashboardAside: () => void;
}

const Navigation: FC<NavigationProps> = ({ toggleDashboardAside }) => {
  return (
    <div className="w-full px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16">
        <button className="p-2" onClick={toggleDashboardAside}>
          <Bars3Icon className="h-8 w-8" />
        </button>
        <nav className="absolute right-0 h-16 p-4 text-white">
          <div className="hidden md:flex items-center space-x-4">
            <div className="space-x-2 text-bg-card">
              {mainMenuItems.map(item => <NavButton navItem={item} />)}
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
};

export default Navigation;