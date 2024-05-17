/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/DONGavdpKnx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import CustomerMenu from '@/components/menus/customerMenu';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import Link from 'next/link';
import {
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  PaginationContent,
  Pagination
} from '@/components/ui/pagination';
import { Customers } from '@/components/customers';
export default function CustomersPage() {
  return (
    <div className="flex h-full w-full flex-col">
      <CustomerMenu />
      <Customers />
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
