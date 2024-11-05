import { HomeIcon, CalendarIcon, UserGroupIcon, BookOpenIcon } from '@heroicons/react/24/solid';
import { DashboardMenuItem } from '../types/dashboardMenuItem';

export const mainMenuItems: DashboardMenuItem[] = [
  {
    title: 'Dashboard',
    icon: <HomeIcon className="h-6 w-6" />,
    href: '/',
  },
  {
    title: 'Calendar',
    icon: <CalendarIcon className="h-6 w-6" />,
    href: '/calendar',
  },
  {
    title: 'Courses',
    icon: <BookOpenIcon className="h-6 w-6" />,
    href: '/courses',
  },
  {
    title: 'Students',
    icon: <UserGroupIcon className="h-6 w-6" />,
    href: '/students',
  },
];


export default mainMenuItems;