import Settings from './settings';
import { SearchIcon } from '../icons';
import { Search } from '../search';

export default function AppointmentsMenu() {
  return (
    <header className="bg-gray-100 dark:bg-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-2xl font-bold">Upcoming Appointments</h1>
      <div className="relative flex items-center">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        <Search
          placeholder="Search customers..."
          searchUrl={'/dashboard/customers'}
        />
      </div>
      <Settings />
    </header>
  );
}
