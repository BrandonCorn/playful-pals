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

export type UpdateServiceInfo = typeof serviceInfo.$inferInsert;

export async function updateServiceInfo(
  id: string,
  serviceData: Partial<UpdateServiceInfo>
) {
  try {
    return db
      .update(serviceInfo)
      .set({ ...serviceData })
      .where(eq(serviceInfo.id, id))
      .returning();
  } catch (err) {
    console.error('Service info could not be updated ', err);
    throw err;
  }
}

export async function deleteServiceInfo(id: string) {
  try {
    return db.delete(serviceInfo).where(eq(serviceInfo.id, id));
  } catch (err) {
    console.error('Error deleting service info', err);
    throw err;
  }
}
