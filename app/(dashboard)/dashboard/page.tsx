import PetDashboard from '@/components/petDashboard';
import DashboardMenu from '@/components/menus/dashboardMenu';

export default async function Page() {
  return (
    <div className="flex flex-col">
      <DashboardMenu />
      <PetDashboard />
    </div>
  );
}
