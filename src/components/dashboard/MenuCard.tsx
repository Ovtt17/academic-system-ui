import { FC } from "react";
import { Link } from "react-router-dom";
import { DashboardMenuItem } from "../../types/dashboardMenuItem";

interface MenuCardProps {
  item: DashboardMenuItem;
}

const MenuCard: FC<MenuCardProps> = ({ item }) => {
  return (
    <Link to={item.href}>
      <div className="flex space-x-5 bg-card rounded-lg p-3 items-center">
        <div className="text-gray-400">
          <span>{item.icon}</span>
        </div>
        <div className="text-gray-400">
          <p>{item.title}</p>
        </div>
      </div>
    </Link>
  );
}

export default MenuCard;