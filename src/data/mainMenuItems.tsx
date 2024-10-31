import { HomeIcon, CalendarIcon, UserGroupIcon, BookOpenIcon } from '@heroicons/react/24/solid';
import { DashboardMenuItem } from '../types/dashboardMenuItem';

export const mainMenuItems: DashboardMenuItem[] = [
  {
    title: 'Dashboard',
    icon: <HomeIcon className="h-6 w-6" />,
    href: '/dashboard',
  },
  {
    title: 'Calendar',
    icon: <CalendarIcon className="h-6 w-6" />,
    href: '/calendar',
  },
  {
    title: 'Classes',
    icon: <BookOpenIcon className="h-6 w-6" />,
    href: '/classes',
  },
  {
    title: 'Students',
    icon: <UserGroupIcon className="h-6 w-6" />,
    href: '/students',
  },
];


export default mainMenuItems;