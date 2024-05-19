/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/0lJWSxv5FDr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '@/components/ui/button';
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
  DialogClose
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import { TrashIcon, PencilIcon } from '@/components/icons';
import {
  deleteAppointmentById,
  fetchTodaysAppointments
} from 'actions/appointments';
import CancelAppointmentButton from '@/components/appointments/buttons/cancelAppointmentButton';

export default async function AppointmentsTable() {
  const appointments = await fetchTodaysAppointments();
  const deleteApp = async (id: string) => {
    await deleteAppointmentById(id);
  };
  console.log('appointments ', appointments);
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
              const date = new Date(appointment.arrivalDate);
              const time = date.getTime();
              console.log('time ', time);
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
                    <div>{date.toDateString()}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {date.toLocaleTimeString()}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>{appointment?.details}</div>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="icon" variant="outline">
                          <PencilIcon className="h-4 w-4" />
                          <span className="sr-only">Edit appointment</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Edit Appointment</DialogTitle>
                          <DialogDescription>
                            Update the appointment details as needed.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="pet-name">Pet Name</Label>
                              <Input defaultValue="Buddy" id="pet-name" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="pet-type">Breed</Label>
                              <Input
                                defaultValue={appointment.breed}
                                id="breed"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="service">Service</Label>
                              <Select defaultValue="boarding" name="service">
                                <SelectTrigger>
                                  <SelectValue placeholder="Select service" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="grooming">
                                    Grooming
                                  </SelectItem>
                                  <SelectItem value="boarding">
                                    Boarding
                                  </SelectItem>
                                  <SelectItem value="daycare">
                                    Daycare
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="arrival-date">Arrival Date</Label>
                              <Input
                                defaultValue="2023-05-22"
                                id="arrival-date"
                                type="date"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="arrival-time">Arrival Time</Label>
                              <Input
                                defaultValue="10:00"
                                id="arrival-time"
                                type="time"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="details">Details</Label>
                              <Textarea
                                defaultValue="Nail trim, bath"
                                id="details"
                              />
                            </div>
                          </div>
                        </div>
                        <DialogFooter>
                          <DialogClose>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                          <Button>
                            <div>
                              <div>
                                <div className="fixed bottom-4 right-4 z-50">
                                  <div>
                                    <div>Appointment Updated</div>
                                    <div>
                                      The appointment has been successfully
                                      updated.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            Save Changes
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <CancelAppointmentButton id={appointment?.id} />
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}
