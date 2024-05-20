'use client';

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
import { Input } from '@/components/ui/input';
import { Customers } from '@/lib/schema';
import { useFormState, useFormStatus } from 'react-dom';
import { updateCustomerInfo } from 'actions/customer';
import { usePathname } from 'next/navigation';

export default function CustomerInfo({ customer }: { customer: Customers }) {
  const path = usePathname();
  const updateCustomerInfoAction = updateCustomerInfo.bind(null, { path });
  const [customerState, updateCustomerAction] = useFormState(
    updateCustomerInfoAction,
    null
  );
  const { pending } = useFormStatus();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800 dark:text-gray-200">
      <h2 className="text-2xl font-bold mb-4">Customer Profile</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-500 dark:text-gray-400">First Name</p>
          <p className="font-medium">{customer.firstName}</p>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">Last Name</p>
          <p className="font-medium">{customer.lastName}</p>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">Phone</p>
          <p className="font-medium">{customer.phoneNumber}</p>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">Email</p>
          <p className="font-medium">{customer.email}</p>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">Address</p>
          <p className="font-medium">{customer.address}</p>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">City</p>
          <p className="font-medium">{customer.city}</p>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">State</p>
          <p className="font-medium">{customer.state}</p>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">Zip</p>
          <p className="font-medium">{customer.zip}</p>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Update Info</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Update Customer Information</DialogTitle>
              <DialogDescription>
                Make changes to your customer profile.
              </DialogDescription>
            </DialogHeader>
            <form className="grid gap-4 py-4" action={updateCustomerAction}>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="firstName">
                  First Name
                </Label>
                <Input
                  className="col-span-3"
                  defaultValue={customer.firstName}
                  id="firstName"
                  name="firstName"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="lastName">
                  Last Name
                </Label>
                <Input
                  className="col-span-3"
                  defaultValue={customer.lastName}
                  id="lastName"
                  name="lastName"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="phone">
                  Phone
                </Label>
                <Input
                  className="col-span-3"
                  defaultValue={customer.phoneNumber}
                  id="phone"
                  name="phoneNumber"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="email">
                  Email
                </Label>
                <Input
                  className="col-span-3"
                  defaultValue={customer.email}
                  id="email"
                  name="email"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="address">
                  Address
                </Label>
                <Input
                  className="col-span-3"
                  defaultValue={customer.address}
                  id="address"
                  name="address"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="city">
                  City
                </Label>
                <Input
                  className="col-span-3"
                  defaultValue={customer.city}
                  id="city"
                  name="city"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="state">
                  State
                </Label>
                <Input
                  className="col-span-3"
                  defaultValue={customer.state}
                  id="state"
                  name="state"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="zip">
                  Zip
                </Label>
                <Input
                  className="col-span-3"
                  defaultValue={customer.zip}
                  id="zip"
                  name="zip"
                />
              </div>
              <DialogClose asChild>
                <DialogFooter>
                  <Button formAction={updateCustomerAction} type="submit">
                    {pending ? 'Saving...' : 'Save Updates'}
                  </Button>
                </DialogFooter>
              </DialogClose>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
