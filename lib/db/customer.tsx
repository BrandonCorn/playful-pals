import { customers } from '@/lib/schema';
import { db } from '@/lib/db';
import { eq } from 'drizzle-orm';

export type InsertCustomer = typeof customers.$inferInsert;

export async function insertCustomer(
  customer: InsertCustomer
): Promise<InsertCustomer | InsertCustomer[] | { error: any }> {
  try {
    return db.insert(customers).values(customer).returning();
  } catch (err) {
    console.error('error creating customer', err);
    // @ts-ignore
    if (err?.detail.includes('already exists'))
      return { error: 'Customer already exists' };
    throw err;
  }
}

export type SelectCustomer = typeof customers.$inferSelect;

export async function selectAllCustomers(): Promise<
  SelectCustomer | SelectCustomer[] | undefined | { error: any }
> {
  try {
    return db.select().from(customers);
  } catch (err) {
    console.error('error selecting customers', err);
    throw err;
  }
}

export async function selectCustomer(
  email: string
): Promise<SelectCustomer | SelectCustomer[] | { error: any } | undefined> {
  try {
    return db
      .select()
      .from(customers)
      .where(eq(customers.email, email))
      .limit(1);
  } catch (err) {
    console.error('Customer not found', err);
    throw err;
  }
}

export type UpdateCustomer = typeof customers.$inferInsert;

export async function updateCustomer(
  email: string,
  customerData: Partial<UpdateCustomer>
) {
  try {
    return db
      .update(customers)
      .set({ ...customerData })
      .where(eq(customers.email, email))
      .returning();
  } catch (err) {
    console.error('Customer could not be updated ', err);
    throw err;
  }
}
