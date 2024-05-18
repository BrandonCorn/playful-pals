'use server';
import z from 'zod';
import { InsertCustomer, insertCustomer } from '@/lib/db/customer';

const insertCustomerSchema = z.object({
  firstName: z.string({
    required_error: 'First name is required',
    invalid_type_error: 'First name must be a string'
  }),
  lastName: z.string({
    required_error: 'Last name is required',
    invalid_type_error: 'Last name must be a string'
  }),
  address: z.string({
    required_error: 'Address is required',
    invalid_type_error: 'Address must be a string'
  }),
  city: z.string({
    required_error: 'City is required',
    invalid_type_error: 'City must be a string'
  }),
  state: z.string({
    required_error: 'State is required',
    invalid_type_error: 'State must be a string'
  }),
  zip: z.string({
    required_error: 'Zip is required',
    invalid_type_error: 'Zip must be a string'
  }),
  phoneNumber: z
    .string({
      required_error: 'Phone number is required',
      invalid_type_error: 'Phone number must a string'
    })
    .length(10, { message: 'Phone number must be 10 digits long' }),
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string'
    })
    .email({ message: 'Must provide a valid email' })
});

export async function createCustomer(state: any, formData: FormData) {
  const result = insertCustomerSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    address: formData.get('address'),
    city: formData.get('city'),
    state: formData.get('state'),
    zip: formData.get('zip'),
    phoneNumber: formData.get('phoneNumber'),
    email: formData.get('email')
  });

  if (result.error) {
    return { error: result.error.flatten().fieldErrors };
  } else if (result.success) {
    const customer: InsertCustomer = result.data;

    try {
      return await insertCustomer(customer);
    } catch (err) {
      console.error('Error creating customer ', err);
      return { error: err };
    }
  }
}
