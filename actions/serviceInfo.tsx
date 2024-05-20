'use server';
import z from 'zod';
import { revalidatePath } from 'next/cache';
import { formatDateForStorage } from '@/lib/utils';
import { insertNewServiceInfo } from '@/lib/db/serviceInfo';
import { updateAppointment } from '@/lib/db/appointments';

const insertNewServiceInfoSchema = z.object({
  departureDate: z.string({
    required_error: 'Departure date is required',
    invalid_type_error: 'Departure date must be a string'
  }),
  departureTime: z.string({
    invalid_type_error: 'Departure time must be a string'
  }),
  breakfast: z.string({
    invalid_type_error: 'Breakfast must be a string'
  }),
  lunch: z.string({
    invalid_type_error: 'Lunch must be a string'
  }),
  dinner: z.string({
    invalid_type_error: 'Dinner must be a string'
  }),
  belongings: z.string({
    invalid_type_error: 'Belongings must be a string'
  }),
  details: z.string({
    invalid_type_error: 'Details must be a string'
  }),
  medicine: z.string({
    invalid_type_error: 'Medicine must be a string'
  }),
  cubby: z.string({
    invalid_type_error: 'Cubby must be a string'
  })
});

export async function checkInServiceInfo(
  appointmentId: string,
  state: any,
  formData: FormData
) {
  const result = insertNewServiceInfoSchema.safeParse({
    departureDate: formData.get('departureDate'),
    departureTime: formData.get('departureTime'),
    breakfast: formData.get('breakfast'),
    lunch: formData.get('lunch'),
    dinner: formData.get('dinner'),
    belongings: formData.get('belongings'),
    details: formData.get('details'),
    medicine: formData.get('medicine'),
    cubby: formData.get('cubby')
  });

  if (result.error) {
    console.log(result.error.flatten().fieldErrors);
    return { error: result.error.flatten().fieldErrors };
  } else if (result.success) {
    const { departureDate, departureTime, ...serviceInfo } = result.data;
    const newDepartureDate = formatDateForStorage(departureDate, departureTime);
    const newServiceInfo = {
      ...serviceInfo,
      departureDate: newDepartureDate
    };
    try {
      const newServiceInserted = await insertNewServiceInfo(newServiceInfo);
      if (newServiceInserted) {
        console.log('inserted successful', newServiceInserted);
        const update = await updateAppointment(appointmentId, {
          checkedIn: 'true'
        });
        console.log('updated appointment ', update);
      }
      revalidatePath('/dashboard/appointments');
      return newServiceInserted;
    } catch (err) {
      console.error('Error creating service info ', err);
      return { error: err };
    }
  }
}

// export async function fetchTodaysAppointments() {
//   try {
//     const appointments = await selectTodaysAppointments();
//     if (!appointments) {
//       return [];
//     }
//     if (!Array.isArray(appointments)) {
//       return [appointments];
//     }
//     return appointments;
//   } catch (err) {
//     return { error: err };
//   }
// }

// export async function fetchAppointmentHistory() {}

// export async function fetchSinglePetAppointmentHistory() {}

// export async function fetchAppointment(
//   petId: string
// ): Promise<SelectAppointments[] | undefined | { error: string }> {
//   try {
//     const appointment = await selectAppointment(petId);
//     if (!appointment) {
//       return { error: 'Could not find customer' };
//     }
//     return appointment as SelectAppointments[];
//   } catch (err) {
//     return { error: 'Could not find customer' };
//   }
// }

// export async function deleteAppointmentById(id: string) {
//   try {
//     const deleted = await deleteAppointment(id);
//     revalidatePath('/dashboard/appointments');
//     return { message: deleted };
//   } catch (err) {
//     return { error: 'Error deleting appointment' };
//   }
// }

// const updateAppointmentSchema = z.object({
//   petName: z.string(),
//   ownerFirstName: z.string(),
//   ownerLastName: z.string(),
//   arrivalDate: z.string(),
//   arrivalTime: z.string(),
//   service: z.enum(['boarding', 'grooming', 'daycare']),
//   details: z.string(),
//   newPet: z.enum(['true', 'false']),
//   phoneNumber: z
//     .string()
//     .length(10, { message: 'Phone number must be 10 digits long' }),
//   breed: z.string()
// });

// export async function updateAppointmentInfo(
//   appointmentId: string,
//   state: any,
//   formData: FormData
// ) {
//   console.log('got here ');
//   const results = updateAppointmentSchema.safeParse({
//     petName: formData.get('petName'),
//     ownerFirstName: formData.get('ownerFirstName'),
//     ownerLastName: formData.get('ownerLastName'),
//     arrivalDate: formData.get('arrivalDate'),
//     arrivalTime: formData.get('arrivalTime'),
//     service: formData.get('service'),
//     details: formData.get('details'),
//     phoneNumber: formData.get('phoneNumber'),
//     newPet: formData.get('newPet'),
//     breed: formData.get('breed')
//   });
//   console.log(results);
//   if (results.error) {
//     return { error: results.error.flatten().fieldErrors };
//   } else {
//     const { arrivalDate, arrivalTime, ...appointment } = results.data;
//     const newArrivalDate = formatDateForStorage(arrivalDate, arrivalTime);

//     const newAppointment = {
//       arrivalDate: newArrivalDate,
//       ...appointment
//     };

//     try {
//       const updatedAppointment = await updateAppointment(
//         appointmentId,
//         newAppointment
//       );
//       if (!updatedAppointment) {
//         return { error: 'Could not update customer' };
//       }
//       revalidatePath('/dashboard/appointments');
//       return updatedAppointment;
//     } catch (err) {
//       return { error: 'Could not update appointment' };
//     }
//   }
// }
