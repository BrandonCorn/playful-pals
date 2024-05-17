'use server';
import { customers } from '@/lib/schema';
import { db } from '@/lib/db';

export type InsertCustomer = typeof customers.$inferInsert;

export async function createCustomer(customer: InsertCustomer) {
  try {
    return db.insert(customers).values(customer).returning();
  } catch (err) {
    console.error('error creating customer');
    throw err;
  }
}
