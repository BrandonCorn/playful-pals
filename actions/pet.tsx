'use server';
import z from 'zod';
import {
  insertPet,
  insertPetToCustomers,
  selectCustomerPets
} from '@/lib/db/pet';
import { revalidatePath } from 'next/cache';

export type Pets = {
  id: string;
  name: string;
  type: 'dog' | 'cat';
  breed: string;
  gender: string;
  weight: string;
  color: string;
  age: number;
  createdAt: Date;
  updatedAt: Date;
};

const addPetSchema = z.object({
  name: z.string({
    required_error: 'Pet must have a name',
    invalid_type_error: 'Pet name must be a string'
  }),
  type: z.enum(['dog', 'cat']),
  breed: z.string({
    required_error: 'Pet must have a breed',
    invalid_type_error: 'Breed must be a string'
  }),
  gender: z.string({
    required_error: 'Pet must have a gender',
    invalid_type_error: 'Gender must be a string'
  }),
  weight: z.string({
    required_error: 'Pet must have a weight',
    invalid_type_error: 'Weight must be a string'
  }),
  color: z.string({
    required_error: 'Pet must have a color',
    invalid_type_error: 'Color must be a string'
  }),
  age: z.string({
    required_error: 'Pet must have an age',
    invalid_type_error: 'Age must be a number'
  }),
  fixed: z.string({
    required_error: 'Pet must have a neutered or spayed value',
    invalid_type_error: 'Fixed must be a string'
  })
});

export async function addNewPet(
  customerId: any,
  state: any,
  formData: FormData
) {
  const results = addPetSchema.safeParse({
    name: formData.get('name'),
    type: formData.get('type'),
    breed: formData.get('breed'),
    gender: formData.get('gender'),
    weight: formData.get('weight'),
    color: formData.get('color'),
    age: formData.get('age'),
    fixed: formData.get('fixed')
  });

  if (results.error) {
    return { error: results.error.flatten().fieldErrors };
  } else {
    const petData = results.data;
    const addOwner = { ...petData, owner: customerId };
    try {
      const newPet = await insertPet(addOwner);
      if (newPet && Array.isArray(newPet)) {
        const pet = newPet[0];
        // @ts-ignore id exists we use a default function to generate and use notNull
        await insertPetToCustomers(pet.id, customerId);
        revalidatePath('/dashboard/customers/[email]', 'page');
        return newPet;
      }
    } catch (err) {
      return { error: 'Error adding pet' };
    }
  }
}

export async function getCustomerPets(ownerId: string) {
  try {
    const pets = await selectCustomerPets(ownerId);
    if (!pets) {
      return [];
    } else {
      return pets;
    }
  } catch (err) {
    console.error('Error finding pets');
    return { error: 'Error find pets' };
  }
}
