import './globals.css';

import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import {
  HomeIcon,
  CalendarIcon,
  UsersIcon,
  LandmarkIcon,
  PawPrintIcon,
  BellIcon
} from '@/components/icons';
import { NavItem } from './nav-item';
import { Button } from '@/components/ui/button';

import Footer from '@/components/footer';
import TopMenu from '@/components/topMenu';

export const metadata = {
  title: 'Next.js App Router + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, and Prettier.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body>
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-6">
                <Link
                  className="flex items-center gap-2 font-semibold"
                  href="/"
                >
                  <PawPrintIcon className="h-6 w-6" />
                  <span>Playful Pals</span>
                </Link>
                <Button
                  className="ml-auto h-8 w-8"
                  size="icon"
                  variant="outline"
                >
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
                  <NavItem href="/appointments">
                    <CalendarIcon className="h-4 w-4" />
                    Appointments
                  </NavItem>
                  <NavItem href="/customers">
                    <UsersIcon className="h-4 w-4" />
                    Customers
                  </NavItem>
                  <NavItem href="/animals">
                    <PawPrintIcon className="h-4 w-4" />
                    Animals
                  </NavItem>
                  <NavItem href="/financials">
                    <LandmarkIcon className="h-4 w-4" />
                    Financials
                  </NavItem>
                </nav>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <TopMenu />
            {children}
            <Footer />
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
