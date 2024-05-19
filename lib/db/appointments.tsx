import { appointments } from '@/lib/schema';
import { db } from '@/lib/db';
import { desc, eq, gte, lte } from 'drizzle-orm';

export type Appointment = {
  id?: string;
  petName: string;
  ownerFirstName: string;
  ownerLastName: string;
  arrivalDate: Date;
  departureDate?: Date;
  service: 'boarding' | 'grooming' | 'daycare';
  checkedIn?: string;
  dateCheckedOut?: Date;
  details?: string;
  newPet: 'true' | 'false';
  serviceComplete: 'true' | 'false';
  phoneNumber: string;
  breed: string;
};

// id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()).notNull(),
// petId: text('petId'),
// ownerId: text('ownerId'),
// petName: text('petName'),
// ownerFirstName: text('ownerFirstName').notNull(),
// ownerLastName: text('ownerLastName').notNull(),
// arrivalDate: date('arrivalDate', { mode: 'date'}).notNull(),
// departureDate: date('departureDate', { mode: 'date'}),
// service: text('service').notNull(),
// checkedIn: text('checkIn', { enum: ['true', 'false']}).default('false'),
// dateCheckedOut: date('dateCheckedOut', { mode: 'date'}),
// details: text('details'),
// newPet: text('newPet', { enum: ['true', 'false']}).notNull(),
// serviceComplete: text('serviceComplete', { enum: ['true', 'false']}).default('false'),
// phoneNumber: text('phoneNumber').notNull(),
// breed: text('breed').notNull(),

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
  todaysDate.setUTCHours(0, 0, 0, 0);
  console.log('todays ', todaysDate);
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

export async function deleteAppointment(id: string) {
  try {
    return db.delete(appointments).where(eq(appointments.id, id));
  } catch (err) {
    console.error('Error deleting appointment', err);
    throw err;
  }
}
