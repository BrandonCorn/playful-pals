'use client';
import NewAppointmentForm from '../appointments/forms/newAppointmentForm';
import { Search } from '../search';
import Settings from './settings';
import { usePathname } from 'next/navigation';

export default function AppointmentsMenu({
  withSearch
}: {
  withSearch?: boolean;
}) {
  const path = usePathname();
  return (
    <header className="flex items-center justify-between border-b bg-gray-100 px-6 pt-3 pb-2 dark:border-gray-800 dark:bg-gray-950">
      <div className="flex items-center gap-4">
        <div className="relative flex items-center">
          {withSearch ? (
            <Search searchUrl={path} placeholder="Search appointments..." />
          ) : (
            <></>
          )}
        </div>
        <NewAppointmentForm />
      </div>
      <Settings />
    </header>
  );
}
