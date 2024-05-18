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
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ChevronUpIcon, ChevronDownIcon } from 'lucide-react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectLabel
} from '@/components/ui/select';
import { useFormState, useFormStatus } from 'react-dom';
import addNewPet from 'actions/pet';

export default function CustomerPetInfo({
  customerId
}: {
  customerId: string;
}) {
  const addNewPetWithCustomerId = addNewPet.bind(null, customerId);
  const [petState, addPetAction] = useFormState(addNewPetWithCustomerId, null);
  return (
    <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800 dark:text-gray-200">
      <h2 className="text-2xl font-bold mb-4">Pets</h2>
      <div className="space-y-4">
        <Link
          className="flex items-center gap-4 hover:text-blue-500 dark:hover:text-blue-400"
          href="#"
        >
          <Avatar>
            <AvatarImage alt="Pet" src="/placeholder-pet.jpg" />
            <AvatarFallback>Dog</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">Buddy</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Labrador Retriever
            </p>
          </div>
        </Link>
        <Link
          className="flex items-center gap-4 hover:text-blue-500 dark:hover:text-blue-400"
          href="#"
        >
          <Avatar>
            <AvatarImage alt="Pet" src="/placeholder-pet.jpg" />
            <AvatarFallback>Cat</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">Whiskers</h3>
            <p className="text-gray-500 dark:text-gray-400">Persian</p>
          </div>
        </Link>
      </div>
      <div className="mt-6 flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add New Pet</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="py-4">Add New Pet</DialogTitle>
              <DialogDescription>
                Fill out the form to create a new pet profile.
              </DialogDescription>
            </DialogHeader>
            <form action={addPetAction} className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="petName">
                  Name
                </Label>
                <Input
                  className="col-span-3"
                  id="petName"
                  placeholder="Enter pet's name"
                  name="name"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="type">
                  Pet type
                </Label>
                <Select name="type">
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a pet type" />
                  </SelectTrigger>
                  <SelectContent className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                    <SelectScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                      <ChevronUpIcon />
                    </SelectScrollUpButton>
                    <SelectGroup>
                      <SelectLabel className="px-[25px] text-xs leading-[25px] text-mauve11">
                        Pets
                      </SelectLabel>
                      <SelectItem value="dog">Dog</SelectItem>
                      <SelectItem value="cat">Cat</SelectItem>
                    </SelectGroup>
                    <SelectScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                      <ChevronDownIcon />
                    </SelectScrollDownButton>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="petBreed">
                  Breed
                </Label>
                <Input
                  className="col-span-3"
                  id="petBreed"
                  placeholder="Enter pet's breed"
                  name="breed"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="petColor">
                  Color
                </Label>
                <Input
                  className="col-span-3"
                  id="petColor"
                  placeholder="Enter pet's color"
                  name="color"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="petAge">
                  Age
                </Label>
                <Input
                  type="text"
                  className="col-span-3"
                  id="petAge"
                  placeholder="Enter pet's age"
                  name="age"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="petWeight">
                  Weight
                </Label>
                <Input
                  className="col-span-3"
                  id="petWeight"
                  placeholder="Enter pet's weight in lbs"
                  name="weight"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="gender">
                  Gender
                </Label>
                <Input
                  className="col-span-3"
                  id="gender"
                  placeholder="Enter pet's gender"
                  name="gender"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="fixed">
                  Spayed / Neutered
                </Label>
                <Input
                  className="col-span-3"
                  id="fixed"
                  placeholder="Pet's spayed or neutered"
                  name="fixed"
                />
              </div>
              <DialogClose asChild>
                <DialogFooter>
                  <Button formAction={addPetAction} type="submit">
                    Save Pet
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
