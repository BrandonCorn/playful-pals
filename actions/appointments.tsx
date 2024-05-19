'use server';
import z from 'zod';
import { revalidatePath } from 'next/cache';
import {
  insertNewAppointment,
  InsertAppointment,
  SelectAppointments,
  selectAppointment,
  selectTodaysAppointments,
  deleteAppointment
} from '@/lib/db/appointments';
import { parseTime } from '@/lib/utils';

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
  arrivalDate: z.string({
    required_error: 'Arrival Date is required',
    invalid_type_error: 'Arrival Date must be a date'
  }),
  arrivalTime: z.string(),
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
    .length(10, { message: 'Phone number must be 10 digits long' }),
  breed: z.string({
    required_error: 'Breed is required',
    invalid_type_error: 'breed must be a string'
  })
});

export async function createAppointment(state: any, formData: FormData) {
  console.log('started ', formData);
  const result = insertNewAppointmentSchema.safeParse({
    petName: formData.get('petName'),
    ownerFirstName: formData.get('ownerFirstName'),
    ownerLastName: formData.get('ownerLastName'),
    arrivalDate: formData.get('arrivalDate'),
    arrivalTime: formData.get('arrivalTime'),
    service: formData.get('service'),
    details: formData.get('details'),
    phoneNumber: formData.get('phoneNumber'),
    newPet: formData.get('newPet'),
    breed: formData.get('breed')
  });

  if (result.error) {
    console.log(result.error.flatten().fieldErrors);
    return { error: result.error.flatten().fieldErrors };
  } else if (result.success) {
    const { arrivalDate, arrivalTime, ...appointment } = result.data;
    const newArrivalDate = new Date(`${arrivalDate} ${arrivalTime}`);

    const newAppointment = {
      arrivalDate: newArrivalDate,
      ...appointment
    };

    try {
      const appointmentInserted = await insertNewAppointment(newAppointment);
      revalidatePath('/dashboard/appointments');
      return appointmentInserted;
    } catch (err) {
      console.error('Error creating appointment ', err);
      return { error: err };
    }
  }
}

export async function fetchTodaysAppointments() {
  try {
    const appointments = await selectTodaysAppointments();
    if (!appointments) {
      return [];
    }
    if (!Array.isArray(appointments)) {
      return [appointments];
    }
    return appointments;
  } catch (err) {
    return { error: err };
  }
}

export async function fetchAppointmentHistory() {}

export async function fetchSinglePetAppointmentHistory() {}

export async function fetchAppointment(
  petId: string
): Promise<SelectAppointments[] | undefined | { error: string }> {
  try {
    const appointment = await selectAppointment(petId);
    if (!appointment) {
      return { error: 'Could not find customer' };
    }
    return appointment as SelectAppointments[];
  } catch (err) {
    return { error: 'Could not find customer' };
  }
}

export async function deleteAppointmentById(id: string) {
  try {
    console.log('entered the delete');
    const deleted = await deleteAppointment(id);
    console.log('deleted ', deleted);
    revalidatePath('/dashboard/appointments');
    return { message: deleted };
  } catch (err) {
    return { error: 'Error deleting appointment' };
  }
}

// const updateCustomerSchema = z.object({
//   firstName: z.string({}),
//   lastName: z.string({}),
//   address: z.string({}),
//   city: z.string({}),
//   state: z.string({}),
//   zip: z.string({}),
//   phoneNumber: z.string({}),
//   email: z
//     .string({
//       required_error: 'Email is required',
//       invalid_type_error: 'Email must be a string'
//     })
//     .email({ message: 'Must provide a valid email' })
// });

// export async function updateCustomerInfo(state: any, formData: FormData) {
//   const results = updateCustomerSchema.safeParse({
//     firstName: formData.get('firstName'),
//     lastName: formData.get('lastName'),
//     address: formData.get('address'),
//     city: formData.get('city'),
//     state: formData.get('state'),
//     zip: formData.get('zip'),
//     phoneNumber: formData.get('phoneNumber'),
//     email: formData.get('email')
//   });

//   if (results.error) {
//     return { error: results.error.flatten().fieldErrors };
//   } else {
//     const customer = results.data;

//     try {
//       const updatedCustomer = await updateCustomer(customer.email, customer);
//       if (!updatedCustomer) {
//         return { error: 'Could not update customer' };
//       }
//       revalidatePath('/dashboard/customers/[email]', 'page');
//       return updatedCustomer;
//     } catch (err) {
//       return { error: 'Could not update customer' };
//     }
//   }
// }
