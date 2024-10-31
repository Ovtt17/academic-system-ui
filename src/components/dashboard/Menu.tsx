import { FC } from "react";
import MenuCard from "./MenuCard";
import { DashboardMenuItem } from "../../types/dashboardMenuItem";

interface MenuProps {
  title: string;
  menuItems: DashboardMenuItem[]
}

const Menu: FC<MenuProps> = ({ title, menuItems }) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-md font-semibold">{title}</h3>
      {menuItems.map((item, index) => (
        <MenuCard
          item={item}
          key={index}
        />
      ))}
    </div>
  );
}

export default Menu;