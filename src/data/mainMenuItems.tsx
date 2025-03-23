import { HomeIcon, UserGroupIcon, BookOpenIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/solid';
import { DashboardMenuItem } from '../types/dashboardMenuItem';

export const mainMenuItems: DashboardMenuItem[] = [
  {
    title: 'Dashboard',
    icon: <HomeIcon className="h-6 w-6" />,
    href: '/',
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
  {
    title: 'Assignments',
    icon: <ClipboardDocumentListIcon className="h-6 w-6" />,
    href: '/assignments',
  },
];


export default mainMenuItems;