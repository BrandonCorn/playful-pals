import '../globals.css';
import { Analytics } from '@vercel/analytics/react';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

import Footer from '@/components/footer';

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
