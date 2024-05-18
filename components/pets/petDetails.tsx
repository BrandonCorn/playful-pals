import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
  DialogClose
} from '@/components/ui/dialog';
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
import { ChevronUpIcon, ChevronDownIcon } from 'lucide-react';

export default function PetDetails({ children, pet }: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button variant="outline">View Pet Details</Button> */}
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Pet Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input name="name" id="name" defaultValue={pet.name} />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-left" htmlFor="type">
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
                  <SelectGroup defaultValue={pet.type}>
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
            <div className="flex flex-col gap-2">
              <Label htmlFor="breed">Breed</Label>
              <Input name="breed" id="breed" defaultValue={pet.breed} />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-left" htmlFor="gender">
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
                  <SelectGroup defaultValue={pet.gender}>
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
            <div className="flex flex-col gap-2">
              <Label htmlFor="color">Color</Label>
              <Input name="color" id="color" defaultValue={pet.color} />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="weight">Weight</Label>
              <Input name="weight" id="weight" defaultValue={pet.weight} />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="age">Age</Label>
              <Input name="age" id="age" defaultValue={pet.age} />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-left" htmlFor="fixed">
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
                  <SelectGroup defaultValue={pet.fixed}>
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
          </div>
        </div>
        <DialogClose asChild>
          <DialogFooter>
            <Button>Update</Button>
          </DialogFooter>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
