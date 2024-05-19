/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/0uQ3MvStDxw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import CustomerInfo from './customerProfileSections/customerInfo';
import CustomerPetInfo from './customerProfileSections/customerPetInfo';
import CustomerPetAppointments from './customerProfileSections/customerPetAppointments';
import { fetchCustomer } from 'actions/customer';
import { Suspense } from 'react';

export async function CustomerProfile({ email }: { email: string }) {
  const customer = await fetchCustomer(email);

  if (!customer) {
    throw new Error('No customer found');
  }

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Suspense fallback={<></>}>
          {/* @ts-ignore */}
          <CustomerInfo customer={customer[0]} />
          {/* @ts-ignore */}
          <CustomerPetInfo customerId={customer[0].id} />
          <CustomerPetAppointments />
        </Suspense>
      </div>
    </div>
  );
}