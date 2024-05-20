import '../globals.css';
import { Analytics } from '@vercel/analytics/react';

import TopMenu from '@/components/menus/dashboardMenu';
import MainNavigation from '@/components/mainNavigation';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'Playful Pals',
  description:
    'A user admin dashboard for the playful pals business associates powered by Next.js App Router + NextAuth + Tailwind CSS'
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
      <SpeedInsights />
      <body>
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <MainNavigation />
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
