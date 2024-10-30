import { FC } from "react";
import { DashboardMenuItem } from "../../data/mainMenuItems";
import { Link } from "react-router-dom";

interface MenuCardProps {
  item: DashboardMenuItem;
}

const MenuCard: FC<MenuCardProps> = ({ item }) => {
  return (
    <Link to={item.href}>
      <div className="flex space-x-5 bg-card rounded-lg p-3 items-center">
        <div className="text-gray-400">
          {item.icon}
        </div>
        <div>
          <p className="text-gray-400">{item.title}</p>
        </div>
      </div>
    </Link>
  );
}

export default MenuCard;