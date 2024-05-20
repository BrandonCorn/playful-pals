'use client';

import { Button } from '@/components/ui/button';
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PencilIcon } from '@/components/icons';
import { useState } from 'react';
import { ServiceInfo } from '@/lib/db/serviceInfo';
import { convertToLocaleDate, formatInputDatesDefaultValue } from '@/lib/utils';
import UpdateAppointmentButton from '@/components/appointments/forms/updateAppointmentButton';

export default function UpdatePetServiceForm({
  service
}: {
  service: ServiceInfo;
}) {
  const [open, setOpen] = useState(false);
  const { date, time } = convertToLocaleDate(service.departureDate);
  const { newDate, newTime } = formatInputDatesDefaultValue(
    service.departureDate.toLocaleDateString(),
    time
  );

  return (
    <div>
      <Dialog open={open} onOpenChange={() => setOpen(!open)}>
        <DialogTrigger asChild>
          <Button size="icon" variant="outline">
            <PencilIcon className="h-4 w-4" />
            <span className="sr-only">Edit pet</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Services</DialogTitle>
            <DialogDescription>
              Edit your pets service details
            </DialogDescription>
          </DialogHeader>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="new-departure-date">Departure Date</Label>
                <Input
                  defaultValue={newDate}
                  name="departureDate"
                  id="new-departure-date"
                  type="date"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-departure-time">Departure Time</Label>
                <Input
                  defaultValue={newTime}
                  name="departureTime"
                  id="new-departure-time"
                  type="time"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-breakfast">Breakfast</Label>
                <Input
                  defaultValue={service.breakfast}
                  name="breakfast"
                  id="new-breakfast"
                  placeholder="breakfast"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-lunch">Lunch</Label>
                <Input
                  defaultValue={service.lunch}
                  name="lunch"
                  id="new-lunch"
                  placeholder="lunch"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-dinner">Dinner</Label>
                <Input
                  defaultValue={service.dinner}
                  name="dinner"
                  id="new-dinner"
                  placeholder="dinner"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-cubby">cubby</Label>
                <Input
                  defaultValue={service.cubby}
                  name="cubby"
                  id="new-cubby"
                  placeholder="cubby"
                />
              </div>
            </div>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="new-medicine">Medicine Instructions</Label>
                <Textarea
                  defaultValue={service.medicine}
                  rows={7}
                  name="medicine"
                  id="new-medicine"
                  placeholder="Please enter medicine instructions"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-belongings">Belongings</Label>
                <Textarea
                  defaultValue={service.belongings}
                  rows={7}
                  name="belongings"
                  id="new-belongings"
                  placeholder="Please enter pets belongings"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="details">Special Instructions</Label>
                <Textarea
                  defaultValue={service.details}
                  rows={7}
                  name="details"
                  id="details"
                  placeholder="Enter additional instructions or details"
                />
              </div>
            </div>
            <DialogFooter className="py-4">
              <Button onClick={() => setOpen(!open)} variant="outline">
                Cancel
              </Button>
              <UpdateAppointmentButton
                appointment={service as any}
                buttonTitle="Update appointment"
              />
              <Button onClick={() => setOpen(!open)}>Save Changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
