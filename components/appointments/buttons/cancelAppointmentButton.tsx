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
import { Button } from '../../ui/button';
import { TrashIcon } from '../../icons';
import { deleteAppointmentById } from 'actions/appointments';
import { useState } from 'react';

export default function CancelButton({ id }: { id: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <TrashIcon className="h-4 w-4" />
          <span className="sr-only">Cancel appointment</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cancel Appointment</DialogTitle>
          <DialogDescription>
            Are you sure you want to cancel this appointment? This action cannot
            be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => setOpen(!open)}>No, keep appointment</Button>
          <Button onClick={() => deleteAppointmentById(id)}>
            Yes, cancel appointment
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
