import PetsOnSiteMenu from '@/components/menus/petsOnSiteMenu';
import PetsOnSiteTable from '@/components/petsOnSite/petsOnSiteTable';

export default function PetsOnSitePage() {
  return (
    <div className="flex h-full w-full flex-col">
      <PetsOnSiteMenu />
      <PetsOnSiteTable />
    </div>
  );
}
