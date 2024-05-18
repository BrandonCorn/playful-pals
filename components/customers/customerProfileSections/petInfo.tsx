import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import NewPetForm from '@/components/pets/forms/newPetForm';
import { getCustomerPets } from 'actions/pet';
import PetDetails from '@/components/pets/petDetails';

export default async function CustomerPetInfo({
  customerId
}: {
  customerId: string;
}) {
  const pets = await getCustomerPets(customerId);
  if (!pets) {
    return (
      <div>
        <p> No pets to display </p>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800 dark:text-gray-200">
      <h2 className="text-2xl font-bold mb-4">Pets</h2>
      <div className="space-y-4 flex">
        {Array.isArray(pets) &&
          pets.map((pet, i) => {
            return (
              <div>
                <PetDetails pet={pet}>
                  <Button
                    variant="ghost"
                    key={`pet-${i}`}
                    className="flex items-center gap-4 hover:text-blue-500 dark:hover:text-blue-400"
                    // onClick={}
                    // href="#"
                  >
                    <Avatar>
                      <AvatarImage alt="Pet" src="/placeholder-pet.jpg" />
                      <AvatarFallback>
                        {pet.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{pet.name}</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        {pet.breed}
                      </p>
                    </div>
                  </Button>
                </PetDetails>
              </div>
            );
          })}
      </div>
      <NewPetForm customerId={customerId} />
    </div>
  );
}
