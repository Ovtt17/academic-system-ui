import { Bars3Icon, ChatBubbleBottomCenterIcon, FolderIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { FC } from "react";

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
            <div className="relative mr-10">
              <input
                type="text"
                placeholder="Search..."
                className="rounded-full p-2 bg-card pl-10"
              />
              <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500" />
            </div>
            <div className="space-x-2 text-bg-card">
              <button className="p-2">
                <FolderIcon className="h-6 w-6" />
              </button>
              <button className="p-2">
                <ChatBubbleBottomCenterIcon className="h-6 w-6" />
              </button>
              <button className="p-2">
                <FolderIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
};

export default Navigation;