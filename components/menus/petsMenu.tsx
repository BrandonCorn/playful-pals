'use client';
import NewCustomerForm from '../customers/forms/newCustomerForm';
import { SearchIcon } from '../icons';
import NewPetForm from '../pets/forms/newPetForm';
import { Search } from '../search';
import Settings from './settings';

export default function PetsMenu() {
  return (
    <header className="flex items-center justify-between border-b bg-gray-100 px-6 pt-3 pb-2 dark:border-gray-800 dark:bg-gray-950">
      <div className="flex items-center gap-4">
        <div className="relative flex items-center">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
          <Search placeholder="Search pets..." searchUrl={'/dashboard/pets'} />
        </div>
        {/* <NewPetForm customerId={''} /> */}
      </div>
      <Settings />
    </header>
  );
}
