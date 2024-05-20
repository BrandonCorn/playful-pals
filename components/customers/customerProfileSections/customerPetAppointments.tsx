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
import { Select } from '@/components/ui/select';

export default function CustomerPetAppointments() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800 dark:text-gray-200">
      <h2 className="text-2xl font-bold mb-4">Upcoming Appointments</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Boarding</h3>
            <h3 className="font-medium"> Dro - German Shephard </h3>
            <p className="text-gray-500 dark:text-gray-400">
              May 25, 2025 - 2:00 PM
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline">
                View Details
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Appointment Details</DialogTitle>
                <DialogDescription>
                  Review the details of your upcoming appointment.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right" htmlFor="service">
                    Service
                  </Label>
                  <p className="col-span-3">Boarding</p>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right" htmlFor="date">
                    Date
                  </Label>
                  <p className="col-span-3">May 25, 2024</p>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right" htmlFor="time">
                    Time
                  </Label>
                  <p className="col-span-3">2:00 PM</p>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right" htmlFor="pet">
                    Pet
                  </Label>
                  <p className="col-span-3">Dro</p>
                </div>
              </div>
              <DialogFooter>
                <Button className="mr-2" variant="outline">
                  Cancel Appointment
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Update Appointment</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Update Appointment</DialogTitle>
                      <DialogDescription>
                        Make changes to your appointment.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="service">
                          Service
                        </Label>
                        <Input
                          className="col-span-3"
                          defaultValue="Boarding"
                          id="service"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="date">
                          Date
                        </Label>
                        <Input
                          className="col-span-3"
                          defaultValue="2024-05-25"
                          id="date"
                          type="date"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="time">
                          Time
                        </Label>
                        <Input
                          className="col-span-3"
                          defaultValue="14:00"
                          id="time"
                          type="time"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="pet">
                          Pet
                        </Label>
                        <Select
                          // className="col-span-3"
                          defaultValue="dro"
                          name="pet"
                        >
                          <option value="dro">Dro</option>
                          <option value="holly">Holly</option>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save Changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
