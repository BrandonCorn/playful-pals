import Link from 'next/link';
import {
  HomeIcon,
  CalendarIcon,
  UsersIcon,
  LandmarkIcon,
  PawPrintIcon,
  BellIcon
} from '@/components/icons';
import { NavItem } from '@/components/nav-item';
import { Button } from '@/components/ui/button';

export default function MainNavigation() {
  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <PawPrintIcon className="h-6 w-6" />
            <span>Playful Pals</span>
          </Link>
          <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
            <BellIcon className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <NavItem href="/dashboard">
              <HomeIcon className="h-4 w-4" />
              Dashboard
            </NavItem>
            <NavItem href="/dashboard/appointments">
              <CalendarIcon className="h-4 w-4" />
              Appointments
            </NavItem>
            <NavItem href="/dashboard/customers">
              <UsersIcon className="h-4 w-4" />
              Customers
            </NavItem>
            <NavItem href="/dashboard/pets">
              <PawPrintIcon className="h-4 w-4" />
              Pets
            </NavItem>
            <NavItem href="/dashboard/pets/onsite">
              <PawPrintIcon className="h-4 w-4" />
              Onsite
            </NavItem>
            <NavItem href="/dashboard/financials">
              <LandmarkIcon className="h-4 w-4" />
              Financials
            </NavItem>
          </nav>
        </div>
      </div>
    </div>
  );
}
