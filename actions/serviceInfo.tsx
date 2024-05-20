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
  data: { appointmentId: string; path: string },
  state: any,
  formData: FormData
) {
  const { appointmentId, path } = data;
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
      departureDate: newDepartureDate,
      appointmentId
    };
    try {
      const newServiceInserted = await insertNewServiceInfo(newServiceInfo);
      if (Array.isArray(newServiceInserted)) {
        await updateAppointment(appointmentId, {
          checkedIn: 'true',
          serviceInfoId: newServiceInserted[0].id
        });
      }
      revalidatePath(path, 'page');
      return newServiceInserted;
    } catch (err) {
      console.error('Error creating service info ', err);
      return { error: err };
    }
  }
}

export async function updateServiceInfo(
  data: { serviceInfoId: string; path: string },
  state: any,
  formData: FormData
) {}
