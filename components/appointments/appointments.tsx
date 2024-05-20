/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/0lJWSxv5FDr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '@/components/ui/button';
import { FilterIcon } from '../icons';
import NewAppointmentForm from './forms/newAppointmentForm';
import AppointmentsTable from './table/appointmentsTable';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Suspense } from 'react';
import Link from 'next/link';

export function Appointments() {
  return (
    <main className="flex-1 p-6">
      <div className="flex justify-between items-center mb-6">
        <NewAppointmentForm />
        <Button variant="outline">
          <Link href="/dashboard/appointments/pastAppointments">
            Appointment History
          </Link>
        </Button>
        <div className="flex items-center gap-2">
          <Label className="sr-only" htmlFor="search">
            Search
          </Label>
          <Input
            className="max-w-xs"
            id="search"
            placeholder="Search appointments..."
            type="search"
          />
          <Button size="sm" variant="outline">
            <FilterIcon className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>
      <Suspense>
        <AppointmentsTable />
      </Suspense>
    </main>
  );
}
