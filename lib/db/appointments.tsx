import { appointments } from '@/lib/schema';
import { db } from '@/lib/db';
import { desc, eq, gte } from 'drizzle-orm';

export type InsertAppointment = typeof appointments.$inferInsert;

export async function insertNewAppointment(
  appointment: InsertAppointment
): Promise<InsertAppointment | InsertAppointment[] | { error: any }> {
  try {
    return db.insert(appointments).values(appointment).returning();
  } catch (err) {
    console.error('error creating appointment', err);
    // @ts-ignore
    if (err?.detail.includes('already exists'))
      return { error: 'Appointment already exists' };
    throw err;
  }
}

export type SelectAppointments = typeof appointments.$inferSelect;

export async function selectAllCompleteAppointments(): Promise<
  SelectAppointments | SelectAppointments[] | undefined | { error: any }
> {
  try {
    return db
      .select()
      .from(appointments)
      .where(eq(appointments.serviceComplete, 'true'))
      .orderBy(desc(appointments.arrivalDate));
  } catch (err) {
    console.error('error selecting appointments', err);
    throw err;
  }
}

export async function selectTodaysAppointments(): Promise<
  SelectAppointments[] | undefined | { error: any }
> {
  const todaysDate = new Date();
  todaysDate.setHours(0, 0, 0, 0);
  try {
    return db
      .select()
      .from(appointments)
      .where(gte(appointments.arrivalDate, todaysDate));
  } catch (err) {
    console.error('Error selecting todays appointments', err);
    throw err;
  }
}

export async function selectAppointment(
  id: string
): Promise<
  SelectAppointments | SelectAppointments[] | { error: any } | undefined
> {
  try {
    return db
      .select()
      .from(appointments)
      .where(eq(appointments.id, id))
      .limit(1);
  } catch (err) {
    console.error('Appointment not found', err);
    throw err;
  }
}

export type UpdateAppointments = typeof appointments.$inferInsert;

export async function updateAppointment(
  id: string,
  appointmentData: Partial<UpdateAppointments>
) {
  try {
    return db
      .update(appointments)
      .set({ ...appointmentData })
      .where(eq(appointments.id, id))
      .returning();
  } catch (err) {
    console.error('Appointment could not be updated ', err);
    throw err;
  }
}
