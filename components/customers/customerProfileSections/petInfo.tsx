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
import { Customers } from '@/lib/schema';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default function CustomerPetInfo() {
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
              <DialogTitle>Add New Pet</DialogTitle>
              <DialogDescription>
                Fill out the form to create a new pet profile.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="petName">
                  Name
                </Label>
                <Input
                  className="col-span-3"
                  id="petName"
                  placeholder="Enter pet's name"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="petBreed">
                  Breed
                </Label>
                <Input
                  className="col-span-3"
                  id="petBreed"
                  placeholder="Enter pet's breed"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="petWeight">
                  Weight
                </Label>
                <Input
                  className="col-span-3"
                  id="petWeight"
                  placeholder="Enter pet's weight"
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
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save Pet</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
