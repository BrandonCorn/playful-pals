import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PawPrintIcon } from '@/components/icons';
import { signIn } from '@/lib/auth';
import { auth } from '@/lib/auth';

async function login(formData: FormData) {
  'use server';
  try {
    await signIn('github', { callbackUrl: '/dashboard' });
  } catch (err) {
    throw err;
  }
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#E0F2FE] to-[#DBEAFE] dark:from-[#1E3A8A] dark:to-[#1E40AF]">
      <header className="flex items-center justify-between px-6 py-4">
        <Link className="flex items-center gap-2" href="#">
          <PawPrintIcon className="h-8 w-8 text-[#2563EB]" />
          <span className="text-2xl font-bold text-[#2563EB]">Paw Pals</span>
        </Link>
      </header>
      <main className="flex-1 px-6 py-12 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-[#2563EB] md:text-6xl">
              Welcome to Paw Pals
            </h1>
            <p className="text-lg text-[#6B7280] dark:text-[#D1D5DB]">
              Manage your animal daycare, boarding, grooming, and daycare
              facility with ease.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              alt="dog"
              className="max-w-full border-solid rounded-md"
              height={267}
              src="/dro.jpeg"
              style={{
                aspectRatio: '300/400',
                objectFit: 'cover'
              }}
              width={400}
            />
          </div>
          <form action={login}>
            <Button
              className="rounded-full bg-[#2563EB] px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-[#1E40AF] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 dark:hover:bg-[#2563EB] dark:focus:ring-[#1E40AF]"
              size="lg"
              type="submit"
            >
              Log In
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
