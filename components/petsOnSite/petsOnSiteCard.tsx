import { Input } from '@/components/ui/input';
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card';
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select
} from '@/components/ui/select';
import { PawPrintIcon } from '@/components/icons';
import PetsOnSite from './petsOnSite';

export default function PetsOnSiteCard() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>Animals On Site</CardTitle>
        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="type">Type</SelectItem>
              <SelectItem value="service">Service</SelectItem>
            </SelectContent>
          </Select>
          <Input
            className="w-full bg-white shadow-none appearance-none pl-4 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
            placeholder="Search"
            type="search"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 grid gap-4">
        <PetsOnSite />
      </CardContent>
    </Card>
  );
}
