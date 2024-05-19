import { relations } from "drizzle-orm";
import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  date,
} from "drizzle-orm/pg-core"
import type { AdapterAccountType } from "next-auth/adapters";
 
export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  role: text('text', { enum: ['owner', 'admin', 'user']})
})
 
export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
)
 
export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
})
 
export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
)

export const customers = pgTable("customer", 
  {
    id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    firstName: text('firstName').notNull(),
    lastName: text('lastName').notNull(),
    address: text('address').notNull(),
    city: text('city').notNull(),
    state: text('state').notNull(),
    zip: text('zip').notNull(),
    phoneNumber: text('phoneNumber').notNull().unique(),
    email: text('email').notNull().unique(),
    createdAt: timestamp('createdAt', { mode: 'date'}).$defaultFn(() => new Date()),
    updatedAt: timestamp('updatedAt', { mode: 'date'}).$defaultFn(() => new Date()),
  }
)

export const customerRelations = relations(customers, ({ many }) => ({
  pets: many(customersToPets),
  appointments: many(appointments)
}))

export type Customers = {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phoneNumber: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export const pet = pgTable("pet", 
  {
    id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()).notNull(),
    name: text('name').notNull(),
    type: text('type', { enum: ['dog', 'cat']}).notNull(),
    breed: text('breed').notNull(),
    gender: text('gender').notNull(),
    weight: text('weight').notNull(),
    color: text('color').notNull(),
    age: text('age').notNull(),
    fixed: text('fixed').notNull(),
    ownerId: text('ownerId'),
    createdAt: timestamp('createdAt', { mode: 'date'}).$defaultFn(() => new Date()),
    updatedAt: timestamp('updatedAt', { mode: 'date'}).$defaultFn(() => new Date()),
  }
)

export const petRelations = relations(pet, ({ many }) => ({
  owner: many(customersToPets),
  appointments: many(appointments),
}))

export type Pets = {
  id: string;
  name: string;
  type: 'dog' | 'cat';
  breed: string;
  gender: string;
  weight: string;
  color: string;
  age: string;
  fixed: string;
  owner: string;
  createdAt: Date;
  updatedAt: Date;
}

export const customersToPets = pgTable(
  'customers_to_pets',
  {
    customerId: text('customerId')
      .notNull()
      .references(() => customers.id),
    petId: text('petId')
      .notNull()
      .references(() => pet.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.customerId, t.petId] }),
  }),
);

export const customerToPetRelations = relations(customersToPets, ({ one }) => ({
  pet: one(pet, {
    fields: [customersToPets.petId],
    references: [pet.id],
  }),
  customer: one(customers, {
    fields: [customersToPets.customerId],
    references: [customers.id],
  }),
}));

export const appointments = pgTable('appointment', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()).notNull(),
  petId: text('petId'),
  ownerId: text('ownerId'),
  ownerFirstName: text('ownerFirstName').notNull(),
  ownerLastName: text('ownerLastName').notNull(),
  arrivalDate: date('arrivalDate').notNull(),
  departureDate: date('departureDate'),
  service: text('service').notNull(),
  checkedIn: text('checkIn', { enum: ['true', 'false']}),
  dateCheckedOut: date('dateCheckedOut'),
  details: text('details'),
  newPet: text('newPet', { enum: ['true', 'false']})
});

export const appointmentRelations = relations(appointments, ({ one }) => (
  {
    owner: one(customers, {
      fields: [appointments.ownerId],
      references: [customers.id]
    }),
    pets: one(pet, {
      fields: [appointments.petId],
      references: [pet.id]
    })
  }
));






