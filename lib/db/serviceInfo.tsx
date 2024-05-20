import { serviceInfo } from '@/lib/schema';
import { db } from '@/lib/db';
import { desc, eq, gte, lte } from 'drizzle-orm';

export type ServiceInfo = {
  id: string;
  appointmentId?: string;
  petId?: string;
  departureDate: Date;
  breakfast: string;
  lunch: string;
  dinner: string;
  medicine: string;
  belongings: string;
  details: string;
  cubby: string;
};

export type InsertServiceInfo = typeof serviceInfo.$inferInsert;

export async function insertNewServiceInfo(
  serviceInfoData: InsertServiceInfo
): Promise<InsertServiceInfo | InsertServiceInfo[] | { error: any }> {
  try {
    return db.insert(serviceInfo).values(serviceInfoData).returning();
  } catch (err) {
    console.error('error creating serviceInfo', err);
    throw err;
  }
}

export type SelectServiceInfo = typeof serviceInfo.$inferSelect;

// export async function selectAllCompleteAppointments(): Promise<
// SelectServiceInfo | SelectServiceInfo[] | undefined | { error: any }
// > {
//   try {
//     return db
//       .select()
//       .from(serviceInfo)
//       .where(eq(serviceInfo.serviceComplete, 'true'))
//       .orderBy(desc(appointments.arrivalDate));
//   } catch (err) {
//     console.error('error selecting appointments', err);
//     throw err;
//   }
// }

// export async function selectAllServiceInfo(): Promise<
//   SelectAppointments[] | undefined | { error: any }
// > {
//   const todaysDate = new Date();
//   todaysDate.setUTCHours(0, 0, 0, 0);
//   console.log('todays ', todaysDate);
//   try {
//     return db
//       .select()
//       .from(serviceInfo)
//       .findMany();
//   } catch (err) {
//     console.error('Error selecting todays appointments', err);
//     throw err;
//   }
// }

// export async function selectAppointment(
//   id: string
// ): Promise<
//   SelectAppointments | SelectAppointments[] | { error: any } | undefined
// > {
//   try {
//     return db
//       .select()
//       .from(appointments)
//       .where(eq(appointments.id, id))
//       .limit(1);
//   } catch (err) {
//     console.error('Appointment not found', err);
//     throw err;
//   }
// }

// export type UpdateAppointments = typeof appointments.$inferInsert;

// export async function updateAppointment(
//   id: string,
//   appointmentData: Partial<UpdateAppointments>
// ) {
//   try {
//     return db
//       .update(appointments)
//       .set({ ...appointmentData })
//       .where(eq(appointments.id, id))
//       .returning();
//   } catch (err) {
//     console.error('Appointment could not be updated ', err);
//     throw err;
//   }
// }

export async function deleteServiceInfo(id: string) {
  try {
    return db.delete(serviceInfo).where(eq(serviceInfo.id, id));
  } catch (err) {
    console.error('Error deleting service info', err);
    throw err;
  }
}
