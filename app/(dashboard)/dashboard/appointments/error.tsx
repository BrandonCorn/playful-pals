'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { TriangleAlertIcon } from '@/components/icons';

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
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="bg-red-100 dark:bg-red-900 p-4 rounded-full">
            <TriangleAlertIcon className="h-10 w-10 text-red-500 dark:text-red-400" />
          </div>
          <h2 className="text-xl font-bold text-red-600 dark:text-red-400">
            Sorry, we're experiencing some technical difficulties
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-center">
            There was an issue with loading your appointments. Please try again
            later.
          </p>
          <div className="flex justify-center w-full">
            <Link href="/dashboard">Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
