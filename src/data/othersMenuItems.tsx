import { BeakerIcon, BookOpenIcon, CogIcon } from "@heroicons/react/24/solid";
import { DashboardMenuItem } from "../types/dashboardMenuItem";

export const othersMenuItems: DashboardMenuItem[] = [
  {
    title: 'Reports',
    icon: <BeakerIcon className="h-6 w-6" />,
    href: '/reports',
  },
  {
    title: 'Resources',
    icon: <BookOpenIcon className="h-6 w-6" />,
    href: '/resources',
  },
  {
    title: 'Settings',
    icon: <CogIcon className="h-6 w-6" />,
    href: '/settings',
  },
];
