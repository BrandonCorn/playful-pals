'use client';
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
import { Button } from '@/components/ui/button';
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { createAppointment } from 'actions/appointments';
import { useFormState } from 'react-dom';

export default function NewAppointmentForm() {
  const [appointment, setAppointmentAction] = useFormState(
    createAppointment,
    null
  );

  console.log('appointment ', appointment);
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm">New Appointment</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>New Appointment</DialogTitle>
            <DialogDescription>
              Fill out the form to create a new appointment.
            </DialogDescription>
          </DialogHeader>
          <form action={setAppointmentAction}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pet-name">Pet Name</Label>
                  <Input
                    name="petName"
                    id="pet-name"
                    placeholder="Enter pet name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    name="phoneNumber"
                    id="phone"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="new-pet">New Pet</Label>
                  <Select name="newPet" required>
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
                  <Label htmlFor="owner-first-name">Owner First Name</Label>
                  <Input
                    name="ownerFirstName"
                    id="owner-first-name"
                    placeholder="Enter owner first name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="owner-last-name">Owner Last Name</Label>
                  <Input
                    name="ownerLastName"
                    id="owner-last-name"
                    placeholder="Enter owner last name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service</Label>
                  <Select name="service" required>
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
                  <Label htmlFor="arrival-date">Arrival Date</Label>
                  <Input
                    name="arrivalDate"
                    id="arrival-date"
                    type="date"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="arrival-time">Arrival Time</Label>
                  <Input
                    name="arrivalTime"
                    id="arrival-time"
                    type="time"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="details">Details</Label>
                  <Textarea
                    rows={10}
                    name="details"
                    id="details"
                    placeholder="Enter additional details"
                  />
                </div>
              </div>
            </div>
            <DialogClose asChild>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button formAction={setAppointmentAction}>
                  Save Appointment
                </Button>
              </DialogFooter>
            </DialogClose>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
