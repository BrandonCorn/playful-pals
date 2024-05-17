import '../globals.css';
import { Analytics } from '@vercel/analytics/react';

import Footer from '@/components/footer';

export const metadata = {
  title: 'Next.js App Router + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, and Prettier.'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
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
