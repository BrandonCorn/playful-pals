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
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { PencilIcon } from '@/components/icons';

export default function UpdatePetServiceForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <PencilIcon className="h-4 w-4" />
          <span className="sr-only">Edit pet</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Pet</DialogTitle>
          <DialogDescription>
            Update the pet details as needed.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pet-name">Pet Name</Label>
              <Input defaultValue="Buddy" id="pet-name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pet-type">Pet Type</Label>
              <Input defaultValue="Golden Retriever" id="pet-type" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="service">Service</Label>
              <Select defaultValue="grooming" name="service">
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
              <Label htmlFor="departure-date">Departure Date</Label>
              <Input
                defaultValue="2023-05-22"
                id="departure-date"
                type="date"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="arrival-time">Arrival Time</Label>
              <Input defaultValue="10:00" id="arrival-time" type="time" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="details">Details</Label>
              <Textarea defaultValue="Nail trim, bath" id="details" />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>
            <div>
              <div>
                <div className="fixed bottom-4 right-4 z-50">
                  <div>
                    <div>Pet Updated</div>
                    <div>The pet details have been successfully updated.</div>
                  </div>
                </div>
              </div>
            </div>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
