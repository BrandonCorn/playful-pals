'use client';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { PawPrintIcon, SearchIcon } from '../icons';
import Settings from './settings';

export default function TopMenu() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
      <Link className="lg:hidden" href="#">
        <PawPrintIcon className="h-6 w-6" />
        <span className="sr-only">Home</span>
      </Link>
      <div className="w-full flex-1"></div>
      <Settings />
    </header>
  );
}
