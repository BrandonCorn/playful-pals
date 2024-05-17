'use server';
import { signIn, signOut } from '@/lib/auth';

export async function logout() {
  try {
    await signOut({ redirectTo: '/' });
  } catch (err) {
    throw err;
  }
}

export async function login() {
  try {
    await signIn('github', { callbackUrl: '/dashboard' });
  } catch (err) {
    throw err;
  }
}
