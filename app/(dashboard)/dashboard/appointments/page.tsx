import { Appointments } from '@/components/appointments/appointments';
import AppointmentsMenu from '@/components/menus/appointmentsMenu';

export default function AppointmentsPage() {
  return (
    <div className="flex flex-col h-full">
      <AppointmentsMenu withSearch={true} />
      <Appointments />;
    </div>
  );
}
