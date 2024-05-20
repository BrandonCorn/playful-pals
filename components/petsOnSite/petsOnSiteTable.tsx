/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/v9kbM6NxAM5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Button } from '@/components/ui/button';
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import UpdatePetServiceForm from './forms/updatePetServiceForm';
import { selectCheckedInAppointments } from '@/lib/db/appointments';
import { convertToLocaleDate } from '@/lib/utils';

export default async function PetsOnSiteTable() {
  const appointments = await selectCheckedInAppointments();
  const services = appointments.map((appointment) => {
    const { serviceInfo, ...rest } = appointment;
    return { ...rest, ...serviceInfo };
  });
  // console.log('services ', services);
  return (
    <div className="flex flex-col h-full">
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6"></div>
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pet</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Departure</TableHead>
                <TableHead>Details</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.isArray(services) &&
                services.map((service, i) => {
                  const { date, time } = convertToLocaleDate(
                    // @ts-ignore we know departure date exists because required for check in
                    service?.departureDate
                  );
                  return (
                    <TableRow key={`new-service-key${i}`}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage
                              alt={'avatar image'}
                              src="/placeholder-avatar.jpg"
                            />
                            <AvatarFallback>
                              {service.petName?.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{service.petName}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {service.breed}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{service.service}</TableCell>
                      <TableCell>
                        <div>{date}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {time}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>{service.details}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <UpdatePetServiceForm service={service as any} />
                          <Button className="ml-2">Check Out</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}
