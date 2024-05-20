'use client';
import NewAppointmentForm from '../appointments/forms/newAppointmentForm';
import { SearchIcon } from '../icons';
import { Search } from '../search';
import Settings from './settings';

export default function SimpleMenu() {
  return (
    <header className="flex items-center justify-between border-b bg-gray-100 px-6 pt-3 pb-2 dark:border-gray-800 dark:bg-gray-950">
      <div className="flex items-center gap-4"></div>
      <Settings />
    </header>
  );
}
