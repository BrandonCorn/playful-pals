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
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useFormState } from 'react-dom';
import { useState } from 'react';
import { checkInServiceInfo } from 'actions/serviceInfo';

export default function CheckInForm({
  appointmentId
}: {
  appointmentId: string;
}) {
  const [open, setOpen] = useState(false);
  const checkInWithAppointmentId = checkInServiceInfo.bind(null, appointmentId);
  const [appointmentState, checkInAction] = useFormState(
    checkInWithAppointmentId,
    null
  );
  return (
    <div>
      <Dialog open={open} onOpenChange={() => setOpen(!open)}>
        <DialogTrigger asChild>
          <Button size="sm">Check In</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>New Appointment</DialogTitle>
            <DialogDescription>
              Fill out form to check in your pet.
            </DialogDescription>
          </DialogHeader>
          <form action={checkInAction}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="new-departure-date">Departure Date</Label>
                <Input
                  name="departureDate"
                  id="new-departure-date"
                  type="date"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-departure-time">Departure Time</Label>
                <Input
                  name="departureTime"
                  id="new-departure-time"
                  type="time"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-breakfast">Breakfast</Label>
                <Input
                  name="breakfast"
                  id="new-breakfast"
                  placeholder="breakfast"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-lunch">Lunch</Label>
                <Input
                  name="lunch"
                  id="new-lunch"
                  placeholder="lunch"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-dinner">Dinner</Label>
                <Input
                  name="dinner"
                  id="new-dinner"
                  placeholder="dinner"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-cubby">cubby</Label>
                <Input
                  name="cubby"
                  id="new-cubby"
                  placeholder="cubby"
                  required
                />
              </div>
            </div>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="new-medicine">Medicine Instructions</Label>
                <Textarea
                  rows={7}
                  name="medicine"
                  id="new-medicine"
                  placeholder="Please enter medicine instructions"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-belongings">Belongings</Label>
                <Textarea
                  rows={7}
                  name="belongings"
                  id="new-belongings"
                  placeholder="Please enter pets belongings"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="details">Special Instructions</Label>
                <Textarea
                  rows={7}
                  name="details"
                  id="details"
                  placeholder="Enter additional instructions or details"
                />
              </div>
            </div>
            <DialogFooter className="py-4">
              <Button formAction={checkInAction} onClick={() => setOpen(!open)}>
                Save Check In
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
