import { Input } from '@/components/ui/input';
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
import { Textarea } from '@/components/ui/textarea';
import { PlusIcon } from '../icons';

export default function NewCustomerForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="shrink-0 bg-black text-gray-50 hover:bg-black/90 focus-visible:ring-black">
          <PlusIcon className="mr-2 h-4 w-4" />
          New Customer
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Customer</DialogTitle>
          <DialogDescription>
            Fill out the form to add a new customer to the system.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Name
            </Label>
            <Input className="col-span-3" id="name" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="email">
              Email
            </Label>
            <Input className="col-span-3" id="email" type="email" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="phone">
              Phone
            </Label>
            <Input className="col-span-3" id="phone" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="address">
              Address
            </Label>
            <Textarea className="col-span-3" id="address" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="pets">
              Pets
            </Label>
            <Input className="col-span-3" id="pets" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save Customer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
