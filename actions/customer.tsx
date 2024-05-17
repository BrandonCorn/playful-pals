'use server';
import { customers } from '@/lib/schema';
import { db } from '@/lib/db';

export type InsertUser = typeof customers.$inferInsert;

export async function createCustomer(customer: InsertUser) {
  try {
    return db.insert(customers).values(customer);
  } catch (err) {
    console.error('error creating customer');
    throw err;
  }
}
