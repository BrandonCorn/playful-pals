import '../globals.css';
import { Analytics } from '@vercel/analytics/react';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

import Footer from '@/components/footer';

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
  if (loggedIn) {
    redirect('/dashboard');
  }
  return (
    <html lang="en" className="h-full">
      <body>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
