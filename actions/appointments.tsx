'use server';
import z from 'zod';
import {
  InsertCustomer,
  SelectCustomer,
  insertCustomer,
  selectAllCustomers,
  selectCustomer,
  updateCustomer
} from '@/lib/db/customer';
import { revalidatePath } from 'next/cache';
import { Customers } from '@/lib/schema';
import { insertNewAppointment, InsertAppointment } from '@/lib/db/appointments';

const insertNewAppointmentSchema = z.object({
  petName: z.string({
    required_error: 'Pet name is required',
    invalid_type_error: 'Pet name must be a string'
  }),
  ownerFirstName: z.string({
    required_error: 'First name is required',
    invalid_type_error: 'First name must be a string'
  }),
  ownerLastName: z.string({
    required_error: 'Last name is required',
    invalid_type_error: 'Last name must be a string'
  }),
  arrivalDate: z.date({
    required_error: 'Arrival Date is required',
    invalid_type_error: 'Arrival Date must be a date'
  }),
  service: z.enum(['boarding', 'grooming', 'daycare'], {
    message: 'Service must be boarding, grooming, or daycare'
  }),
  details: z.string(),
  newPet: z.enum(['true', 'false'], {
    message: 'New Pet must be true or false'
  }),
  phoneNumber: z
    .string({
      required_error: 'Phone number is required',
      invalid_type_error: 'Phone number must a string'
    })
    .length(10, { message: 'Phone number must be 10 digits long' })
});

export async function createAppointment(state: any, formData: FormData) {
  const result = insertNewAppointmentSchema.safeParse({
    petName: formData.get('petName'),
    ownerFirstName: formData.get('ownerFirstName'),
    ownerLastName: formData.get('ownerLastName'),
    arrivalDate: formData.get('arrivalDate'),
    service: formData.get('service'),
    details: formData.get('details'),
    phoneNumber: formData.get('phoneNumber'),
    newPet: formData.get('newPet')
  });

  if (result.error) {
    return { error: result.error.flatten().fieldErrors };
  } else if (result.success) {
    const appointment: InsertAppointment = result.data;

    try {
      const appointmentInserted = await insertNewAppointment(appointment);
      revalidatePath('/dashboard/appointments');
      return appointmentInserted;
    } catch (err) {
      console.error('Error creating customer ', err);
      return { error: err };
    }
  }
}

export async function fetchAllCustomers() {
  try {
    const customers = await selectAllCustomers();
    if (!customers) {
      return [];
    }
    if (!Array.isArray(customers)) {
      return [customers];
    }
    return customers;
  } catch (err) {
    return { error: err };
  }
}

export async function fetchCustomer(
  email: string
): Promise<SelectCustomer[] | undefined | { error: string }> {
  try {
    const customer = await selectCustomer(email);
    if (!customer) {
      return { error: 'Could not find customer' };
    }
    return customer as SelectCustomer[];
  } catch (err) {
    return { error: 'Could not find customer' };
  }
}

const updateCustomerSchema = z.object({
  firstName: z.string({}),
  lastName: z.string({}),
  address: z.string({}),
  city: z.string({}),
  state: z.string({}),
  zip: z.string({}),
  phoneNumber: z.string({}),
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string'
    })
    .email({ message: 'Must provide a valid email' })
});

export async function updateCustomerInfo(state: any, formData: FormData) {
  const results = updateCustomerSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    address: formData.get('address'),
    city: formData.get('city'),
    state: formData.get('state'),
    zip: formData.get('zip'),
    phoneNumber: formData.get('phoneNumber'),
    email: formData.get('email')
  });

  if (results.error) {
    return { error: results.error.flatten().fieldErrors };
  } else {
    const customer = results.data;

    try {
      const updatedCustomer = await updateCustomer(customer.email, customer);
      if (!updatedCustomer) {
        return { error: 'Could not update customer' };
      }
      revalidatePath('/dashboard/customers/[email]', 'page');
      return updatedCustomer;
    } catch (err) {
      return { error: 'Could not update customer' };
    }
  }
}
