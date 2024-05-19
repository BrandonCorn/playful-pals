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

export default function AppointmentsTable() {
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
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage alt="Buddy" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>B</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Buddy</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Golden Retriever
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell>Grooming</TableCell>
            <TableCell>
              <div>May 22, 2023</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                10:00 AM
              </div>
            </TableCell>
            <TableCell>
              <div>Nail trim, bath</div>
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
                        <Label htmlFor="pet-type">Pet Type</Label>
                        <Input defaultValue="Golden Retriever" id="pet-type" />
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
                            <SelectItem value="grooming">Grooming</SelectItem>
                            <SelectItem value="boarding">Boarding</SelectItem>
                            <SelectItem value="daycare">Daycare</SelectItem>
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
                              <div>Appointment Updated</div>
                              <div>
                                The appointment has been successfully updated.
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
              <Dialog>
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
                      Are you sure you want to cancel this appointment? This
                      action cannot be undone.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button>No, keep appointment</Button>
                    <Button>Yes, cancel appointment</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage alt="Milo" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Milo</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Labrador
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell>Daycare</TableCell>
            <TableCell>
              <div>May 27, 2023</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                9:00 AM
              </div>
            </TableCell>
            <TableCell>
              <div>Full day</div>
            </TableCell>
            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="icon" variant="outline">
                    <PencilIcon className="h-4 w-4" />
                    <span className="sr-only" />
                  </Button>
                </DialogTrigger>
              </Dialog>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
