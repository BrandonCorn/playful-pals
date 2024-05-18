import { pet } from '@/lib/schema';
import { db } from '@/lib/db';
import { eq } from 'drizzle-orm';

export type InsertPet = typeof pet.$inferInsert;

export async function insertPet(
  petData: InsertPet
): Promise<InsertPet | InsertPet[] | { error: any }> {
  try {
    return db.insert(pet).values(petData).returning();
  } catch (err) {
    console.error('error creating pet', err);
    // @ts-ignore
    if (err?.detail.includes('already exists'))
      return { error: 'Pet already exists' };
    throw err;
  }
}

export type SelectPet = typeof pet.$inferSelect;

export async function selectAllCustomers(): Promise<
  SelectPet | SelectPet[] | undefined | { error: any }
> {
  try {
    return db.select().from(pet);
  } catch (err) {
    console.error('error selecting pets', err);
    throw err;
  }
}

export async function selectPet(
  id: string
): Promise<SelectPet | SelectPet[] | { error: any } | undefined> {
  try {
    return db.select().from(pet).where(eq(pet.id, id)).limit(1);
  } catch (err) {
    console.error('Customer not found', err);
    throw err;
  }
}

export type UpdatePet = typeof pet.$inferInsert;

export async function updateCustomer(id: string, petData: Partial<UpdatePet>) {
  try {
    return db
      .update(pet)
      .set({ ...petData })
      .where(eq(pet.id, id))
      .returning();
  } catch (err) {
    console.error('Pet could not be updated ', err);
    throw err;
  }
}
