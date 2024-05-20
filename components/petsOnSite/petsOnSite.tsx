/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/v9kbM6NxAM5
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
import { FilterIcon, PencilIcon } from '../icons';

export default function PetsOnSite() {
  return (
    <div className="flex flex-col h-full">
      <header className="bg-gray-100 dark:bg-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold">Pets</h1>
      </header>
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm">New Pet</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>New Pet</DialogTitle>
                  <DialogDescription>
                    Fill out the form to add a new pet.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="pet-name">Pet Name</Label>
                      <Input id="pet-name" placeholder="Enter pet name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pet-type">Pet Type</Label>
                      <Input id="pet-type" placeholder="Enter pet type" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="service">Service</Label>
                      <Select name="service">
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
                      <Input id="departure-date" type="date" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="arrival-time">Arrival Time</Label>
                      <Input id="arrival-time" type="time" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="details">Details</Label>
                      <Textarea
                        id="details"
                        placeholder="Enter additional details"
                      />
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Add Pet</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex items-center gap-2">
            <Label className="sr-only" htmlFor="search">
              Search
            </Label>
            <Input
              className="max-w-xs"
              id="search"
              placeholder="Search pets..."
              type="search"
            />
            <Button size="sm" variant="outline">
              <FilterIcon className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pet</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Departure</TableHead>
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
                  <div className="flex items-center gap-2">
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
                              <Input
                                defaultValue="Golden Retriever"
                                id="pet-type"
                              />
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
                                  <SelectItem value="grooming">
                                    Grooming
                                  </SelectItem>
                                  <SelectItem value="boarding">
                                    Boarding
                                  </SelectItem>
                                  <SelectItem value="daycare">
                                    Daycare
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="departure-date">
                                Departure Date
                              </Label>
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
                              <Input
                                defaultValue="10:00"
                                id="arrival-time"
                                type="time"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="details">Details</Label>
                              <Textarea
                                defaultValue="Nail trim, bath"
                                id="details"
                              />
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
                                    <div>
                                      The pet details have been successfully
                                      updated.
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
                    <Button className="ml-2">Check Out</Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}
