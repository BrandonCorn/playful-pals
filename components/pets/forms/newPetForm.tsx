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
import { addNewPet } from 'actions/pet';

export default function NewPetForm({ customerId }: { customerId: string }) {
  const addNewPetWithCustomerId = addNewPet.bind(null, customerId);
  const [petState, addPetAction] = useFormState(addNewPetWithCustomerId, null);
  return (
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
              <Select name="gender">
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="gender" />
                </SelectTrigger>
                <SelectContent className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                  <SelectScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                    <ChevronUpIcon />
                  </SelectScrollUpButton>
                  <SelectGroup>
                    <SelectLabel className="px-[25px] text-xs leading-[25px] text-mauve11">
                      Gender
                    </SelectLabel>
                    <SelectItem value="male">male</SelectItem>
                    <SelectItem value="female">female</SelectItem>
                  </SelectGroup>
                  <SelectScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                    <ChevronDownIcon />
                  </SelectScrollDownButton>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="fixed">
                Neutered/Spayed
              </Label>
              <Select name="fixed">
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Is your pet fixed" />
                </SelectTrigger>
                <SelectContent className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                  <SelectScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                    <ChevronUpIcon />
                  </SelectScrollUpButton>
                  <SelectGroup>
                    <SelectLabel className="px-[25px] text-xs leading-[25px] text-mauve11">
                      yes/no
                    </SelectLabel>
                    <SelectItem value="yes">yes</SelectItem>
                    <SelectItem value="no">no</SelectItem>
                  </SelectGroup>
                  <SelectScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                    <ChevronDownIcon />
                  </SelectScrollDownButton>
                </SelectContent>
              </Select>
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
  );
}
