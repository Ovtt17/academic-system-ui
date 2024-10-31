import { FC } from "react";
import { Link } from "react-router-dom";
import { DashboardMenuItem } from "../../types/dashboardMenuItem";

interface MenuCardProps {
  item: DashboardMenuItem;
}

const MenuCard: FC<MenuCardProps> = ({ item }) => {
  return (
    <Link to={item.href}>
      <div className="flex space-x-5 bg-card rounded-lg p-3 items-center transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#0f0c29] hover:to-[#302b63]">
        <span>
          {item.icon}
        </span>
        <p>
          {item.title}
        </p>
      </div>
    </Link>
  );
}

export default MenuCard;