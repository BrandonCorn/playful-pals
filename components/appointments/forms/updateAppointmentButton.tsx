'use client';
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PencilIcon } from '@/components/icons';
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select
} from '@/components/ui/select';
import { Appointment } from '@/lib/db/appointments';
import { useState } from 'react';
import { useFormState } from 'react-dom';
import { updateAppointmentInfo } from 'actions/appointments';

// export type UpdateAppointment = { id: string } & Appointment;

export default function UpdateAppointmentButton({
  buttonTitle,
  appointment
}: {
  appointment: Appointment;
  buttonTitle?: string;
}) {
  const appointmentId = appointment?.id || '';
  const updateAppointmentWithId = updateAppointmentInfo.bind(
    null,
    appointmentId
  );
  const [open, setOpen] = useState(false);
  const [appointmentState, updateAppAction] = useFormState(
    updateAppointmentWithId,
    null
  );

  const date = new Date(appointment.arrivalDate);
  const time = date.getTime();
  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger asChild>
        {!buttonTitle ? (
          <Button size="icon" variant="outline">
            <PencilIcon className="h-4 w-4" />
            <span className="sr-only">Edit appointment</span>
          </Button>
        ) : (
          <Button>{buttonTitle}</Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Appointment</DialogTitle>
          <DialogDescription>
            Update the appointment details as needed.
          </DialogDescription>
        </DialogHeader>
        <form action={updateAppAction} className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pet-name">Pet Name</Label>
              <Input
                name="petName"
                defaultValue={appointment.petName}
                id="pet-name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pet-type">Breed</Label>
              <Input name="breed" defaultValue={appointment.breed} id="breed" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-pet">New Pet</Label>
              <Select defaultValue={appointment.newPet} name="newPet" required>
                <SelectTrigger>
                  <SelectValue placeholder="Is this pet new?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">yes</SelectItem>
                  <SelectItem value="false">no</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">Service</Label>
              <Select defaultValue={appointment.service} name="service">
                <SelectTrigger>
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="grooming">Grooming</SelectItem>
                  <SelectItem value="boarding">Boarding</SelectItem>
                  <SelectItem value="daycare">Daycare</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="owner-first-name">Owner First Name</Label>
              <Input
                defaultValue={appointment.ownerFirstName}
                name="ownerFirstName"
                id="owner-first-name"
                placeholder="Enter owner first name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="owner-last-name">Owner Last Name</Label>
              <Input
                defaultValue={appointment.ownerLastName}
                name="ownerLastName"
                id="owner-last-name"
                placeholder="Enter owner last name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                defaultValue={appointment.phoneNumber}
                name="phoneNumber"
                id="phone"
                placeholder="Enter phone number"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="arrival-date">Arrival Date</Label>
              <Input
                defaultValue={date.toLocaleDateString()}
                id="arrival-date"
                type="date"
                name="arrivalDate"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="arrival-time">Arrival Time</Label>
              <Input
                name="arrivalTime"
                defaultValue={time}
                id="arrival-time"
                type="time"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="details">Details</Label>
              <Textarea
                name="details"
                defaultValue={appointment.details}
                id="details"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setOpen(!open)} variant="outline">
              Cancel
            </Button>
            <Button
              type="submit"
              formAction={updateAppAction}
              // onClick={() => setOpen(!open)}
            >
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
