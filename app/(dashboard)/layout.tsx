import '../globals.css';
import { Analytics } from '@vercel/analytics/react';

import TopMenu from '@/components/topMenu';
import MainNavigation from '@/components/mainNavigation';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Next.js App Router + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, and Prettier.'
};

async function isLoggedIn() {
  const session = await auth();
  if (!session?.user) return false;
  else return true;
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const loggedIn = await isLoggedIn();
  if (!loggedIn) {
    redirect('/');
  }

  return (
    <html lang="en" className="h-full bg-gray-50">
      <body>
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <MainNavigation />
          <div className="flex flex-col">
            <TopMenu />
            {children}
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
