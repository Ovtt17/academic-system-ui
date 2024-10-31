import mainMenuItems from "../../data/mainMenuItems";
import { othersMenuItems } from "../../data/othersMenuItems";
import Menu from "./Menu";
import UserCard from "./UserCard";

const DashboardAside = () => {
  return (
    <div className="fixed flex-grow top-0 left-0 w-72 h-full bg-deep-navy text-white transition-transform overflow-y-auto">
      <section className="flex flex-col p-4 gap-2">
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <UserCard />
        <Menu
          title="Main Menu"
          menuItems={mainMenuItems}
        />
        <Menu
          title="Others"
          menuItems={othersMenuItems}
        />
      </section>
    </div>
  );
}

export default DashboardAside;