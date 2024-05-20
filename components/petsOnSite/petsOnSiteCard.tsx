import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card';
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select
} from '@/components/ui/select';
import PetsOnSiteTable from './petsOnSiteTable';
import NewAppointmentForm from '../appointments/forms/newAppointmentForm';
import { Search } from '../search';

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
          <Search placeholder="Search pets..." searchUrl="/dashboard" />

          <NewAppointmentForm />
        </div>
      </CardHeader>
      <CardContent className="flex-1 grid gap-4">
        <PetsOnSiteTable />
      </CardContent>
    </Card>
  );
}
