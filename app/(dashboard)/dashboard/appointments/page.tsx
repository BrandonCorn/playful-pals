import { Appointments } from '@/components/appointments/appointments';
import SimpleMenu from '@/components/menus/simpleMenu';

export default function AppointmentsPage() {
  return (
    <div className="flex flex-col h-full">
      <SimpleMenu />
      <Appointments />;
    </div>
  );
}
