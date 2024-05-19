import { customersToPets, pet } from '@/lib/schema';
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
      throw new Error('Pet already exists');
    throw err;
  }
}

export async function insertPetToCustomers(petId: string, customerId: string) {
  try {
    return db.insert(customersToPets).values({ petId, customerId }).returning;
  } catch (err) {
    console.error('Error inserting into join table customers and pets ', err);
    throw new Error('Error connecting pet and customer');
  }
}

export type SelectPet = typeof pet.$inferSelect;

export async function selectAllPets(): Promise<
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
    console.error('Error finding pets', err);
    throw err;
  }
}

export async function selectCustomerPets(
  ownerId: string
): Promise<SelectPet[] | { error: any } | undefined> {
  try {
    return db.query.pet.findMany({ where: eq(pet.owner, ownerId) });
  } catch (err) {
    console.error('Error finding pets', err);
    throw err;
  }
}

export type UpdatePet = typeof pet.$inferInsert;

export async function updatePet(id: string, petData: Partial<UpdatePet>) {
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
