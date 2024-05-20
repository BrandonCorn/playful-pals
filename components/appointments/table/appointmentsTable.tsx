/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/0lJWSxv5FDr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import { fetchTodaysAppointments } from 'actions/appointments';
import CancelAppointmentButton from '@/components/appointments/buttons/cancelAppointmentButton';
import UpdateAppointmentButton from '../forms/updateAppointmentButton';
import { Appointment } from '@/lib/db/appointments';
import { convertToLocaleDate } from '@/lib/utils';
import CheckInForm from '../forms/checkInForm';

export default async function AppointmentsTable() {
  // @ts-ignore
  const appointments: Appointment[] | { error: any } =
    await fetchTodaysAppointments();

  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Pet</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Arrival</TableHead>
            <TableHead>Details</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.isArray(appointments) &&
            appointments.map((appointment, i) => {
              const id = appointment?.id || '';
              const { date, time } = convertToLocaleDate(
                appointment.arrivalDate
              );

              return (
                <TableRow key={`appointment-details-${i}`}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage
                          alt="Buddy"
                          src="/placeholder-avatar.jpg"
                        />
                        <AvatarFallback>
                          {appointment?.petName.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">
                          {appointment?.petName}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {appointment?.breed}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{appointment?.service}</TableCell>
                  <TableCell>
                    <div>{date}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {time}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>{appointment?.details}</div>
                  </TableCell>
                  <TableCell>
                    <UpdateAppointmentButton appointment={appointment} />
                    <CancelAppointmentButton id={id} />
                  </TableCell>
                  <TableCell>
                    <CheckInForm />
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}
