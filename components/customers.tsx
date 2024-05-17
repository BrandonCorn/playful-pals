/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/DONGavdpKnx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import Link from 'next/link';
import { ChevronRightIcon } from './icons';

export function Customers() {
  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            className="group flex items-center gap-4 rounded-md border border-gray-200 bg-white p-4 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900"
            href="#"
          >
            <Avatar className="h-12 w-12">
              <AvatarImage alt="Customer Avatar" src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-medium group-hover:text-primary">John Doe</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                johndoe@example.com
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Pets: Buddy, Whiskers
              </p>
            </div>
            <ChevronRightIcon className="h-5 w-5 text-gray-500 group-hover:text-primary dark:text-gray-400" />
          </Link>
          <Link
            className="group flex items-center gap-4 rounded-md border border-gray-200 bg-white p-4 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900"
            href="#"
          >
            <Avatar className="h-12 w-12">
              <AvatarImage alt="Customer Avatar" src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-medium group-hover:text-primary">Jane Doe</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                janedoe@example.com
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Pets: Daisy
              </p>
            </div>
            <ChevronRightIcon className="h-5 w-5 text-gray-500 group-hover:text-primary dark:text-gray-400" />
          </Link>
          <Link
            className="group flex items-center gap-4 rounded-md border border-gray-200 bg-white p-4 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900"
            href="#"
          >
            <Avatar className="h-12 w-12">
              <AvatarImage alt="Customer Avatar" src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-medium group-hover:text-primary">
                Bob Smith
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                bobsmith@example.com
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Pets: Rufus, Bella
              </p>
            </div>
            <ChevronRightIcon className="h-5 w-5 text-gray-500 group-hover:text-primary dark:text-gray-400" />
          </Link>
          <Link
            className="group flex items-center gap-4 rounded-md border border-gray-200 bg-white p-4 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900"
            href="#"
          >
            <Avatar className="h-12 w-12">
              <AvatarImage alt="Customer Avatar" src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-medium group-hover:text-primary">
                Alice Johnson
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                alicejohnson@example.com
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Pets: Coco
              </p>
            </div>
            <ChevronRightIcon className="h-5 w-5 text-gray-500 group-hover:text-primary dark:text-gray-400" />
          </Link>
          <Link
            className="group flex items-center gap-4 rounded-md border border-gray-200 bg-white p-4 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900"
            href="#"
          >
            <Avatar className="h-12 w-12">
              <AvatarImage alt="Customer Avatar" src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-medium group-hover:text-primary">
                Michael Brown
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                michaelbrown@example.com
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Pets: Max
              </p>
            </div>
            <ChevronRightIcon className="h-5 w-5 text-gray-500 group-hover:text-primary dark:text-gray-400" />
          </Link>
          <Link
            className="group flex items-center gap-4 rounded-md border border-gray-200 bg-white p-4 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900"
            href="#"
          >
            <Avatar className="h-12 w-12">
              <AvatarImage alt="Customer Avatar" src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-medium group-hover:text-primary">
                Emily Davis
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                emilydavis@example.com
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Pets: Lola, Milo
              </p>
            </div>
            <ChevronRightIcon className="h-5 w-5 text-gray-500 group-hover:text-primary dark:text-gray-400" />
          </Link>
        </div>
      </div>
    </div>
  );
}