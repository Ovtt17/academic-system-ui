import { FC } from 'react';
import { DashboardMenuItem } from '../../types/dashboardMenuItem';
import { Link } from 'react-router-dom';

interface NavButtonProps {
  navItem: DashboardMenuItem;
}

const NavButton: FC<NavButtonProps> = ({ navItem }) => {
  return (
    <Link to={navItem.href} className='text-white hover:text-gray-300'>
      <button className="p-2">
        {navItem.icon}
      </button>
    </Link>
  );
}

export default NavButton;