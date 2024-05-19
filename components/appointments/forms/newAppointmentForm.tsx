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

export default function NewAppointmentForm() {
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
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pet-name">Pet Name</Label>
                <Input id="pet-name" placeholder="Enter pet name" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
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
                <Input id="arrival-date" type="date" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="arrival-time">Arrival Time</Label>
                <Input id="arrival-time" type="time" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="details">Details</Label>
                <Textarea id="details" placeholder="Enter additional details" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Save Appointment</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
