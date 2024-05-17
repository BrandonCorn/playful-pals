'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { TriangleAlertIcon, HomeIcon, PhoneIcon } from '@/components/icons';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-md w-full space-y-4 text-center">
        <div className="bg-yellow-500 rounded-full p-4 inline-flex">
          <TriangleAlertIcon className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
          Oops, looks like we hit a snag!
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Don't worry, we're on it! Please try again in a bit and we'll have
          everything back up and running.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-700 disabled:pointer-events-none disabled:opacity-50"
            href="/"
          >
            <HomeIcon className="mr-2 h-4 w-4" />
            Go back home
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="/https://vercel.com/contact"
          >
            <PhoneIcon className="mr-2 h-4 w-4" />
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
