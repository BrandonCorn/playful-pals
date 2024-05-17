import { PuppyDashboard } from '@/components/puppyDashboard';
import DashboardMenu from '@/components/menus/dashboardMenu';

export default async function Page() {
  return (
    <div className="flex flex-col">
      <DashboardMenu />
      <PuppyDashboard />
    </div>
  );
}
