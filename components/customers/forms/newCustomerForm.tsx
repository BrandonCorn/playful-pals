'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
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
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlusIcon } from '../../icons';
import { createCustomer } from 'actions/customer';
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';
import { usePathname } from 'next/navigation';

export default function NewCustomerForm() {
  const path = usePathname();
  const createCustomerWithData = createCustomer.bind(null, { path });
  const [customerState, createCustomerAction] = useFormState(
    createCustomerWithData,
    null
  );
  const { pending } = useFormStatus();

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
        <form action={createCustomerAction} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="firstName">
              First Name
            </Label>
            <Input
              type="text"
              className="col-span-3"
              id="firstName"
              name="firstName"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="lastName">
              Last Name
            </Label>
            <Input
              type="text"
              className="col-span-3"
              id="lastName"
              name="lastName"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="email">
              Email
            </Label>
            <Input
              className="col-span-3"
              id="email"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="phoneNumber">
              Phone
            </Label>
            <Input
              className="col-span-3"
              id="phoneNumber"
              name="phoneNumber"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="address">
              Address
            </Label>
            <Textarea
              className="col-span-3"
              id="address"
              name="address"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="city">
              City
            </Label>
            <Input className="col-span-3" id="city" name="city" required />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="state">
              State
            </Label>
            <Input className="col-span-3" id="state" name="state" required />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="zip">
              Zip
            </Label>
            <Input className="col-span-3" id="zip" name="zip" required />
          </div>
          <DialogClose asChild>
            <DialogFooter>
              <Button variant="outline" aria-disabled={pending} type="submit">
                {pending ? 'Saving...' : 'Save Customer'}
              </Button>
            </DialogFooter>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
}
