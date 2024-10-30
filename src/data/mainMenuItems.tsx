import { HomeIcon, CalendarIcon, InboxIcon, BeakerIcon, CogIcon } from '@heroicons/react/24/solid';

export interface DashboardMenuItem {
  title: string;
  icon: JSX.Element;
  href: string;
}

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
    title: 'Inbox',
    icon: <InboxIcon className="h-6 w-6" />,
    href: '/inbox',
  },
  {
    title: 'Lab',
    icon: <BeakerIcon className="h-6 w-6" />,
    href: '/lab',
  },
  {
    title: 'Settings',
    icon: <CogIcon className="h-6 w-6" />,
    href: '/settings',
  },
];

export default mainMenuItems;