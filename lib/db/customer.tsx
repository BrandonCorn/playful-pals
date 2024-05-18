import { customers } from '@/lib/schema';
import { db } from '@/lib/db';

export type InsertCustomer = typeof customers.$inferInsert;

export async function insertCustomer(
  customer: InsertCustomer
): Promise<InsertCustomer | InsertCustomer[] | { message: string }> {
  try {
    return db.insert(customers).values(customer).returning();
  } catch (err) {
    console.error('error creating customer', err);
    return { message: 'Failed to create customer' };
  }
}
