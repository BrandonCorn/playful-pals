import {
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  PaginationContent,
  Pagination
} from '@/components/ui/pagination';
import PetsTable from '@/components/pets/petTable';
import PetsMenu from '@/components/menus/petsMenu';

export default function PetsPage() {
  return (
    <div className="flex h-full w-full flex-col">
      <PetsMenu />
      {/* @ts-ignore */}
      <PetsTable />
      <div className="flex justify-center border-t bg-gray-100 px-6 py-4 dark:border-gray-800 dark:bg-gray-950">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
