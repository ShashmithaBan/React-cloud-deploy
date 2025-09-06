import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PetCard from '../Custom Cards/PetCard';

const Pets = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('https://monitor-backend-rust.vercel.app/api/pets');
        setPets(response.data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching pet data:', error);
        setError('Error fetching pet data. Please try again later.'); 
        setLoading(false); 
      }
    };
    fetchPets();
    
  }, []);


  return (
    <>
      <div className='md:mx-44 my-16 mx-5'>
        <div className='flex justify-between'>
          <div>
            <h3>What's new?</h3>
            <h1 className='text-2xl font-semibold text-secondary'>
              Take A Look At Some Of Our Pets
            </h1>
          </div>
          <div>
            <button className='hidden md:flex border border-secondary px-8 py-2 rounded-full flex items-center space-x-2'>
              <span>View more</span>
              <span>&gt;</span>
            </button>
          </div>
        </div>

        {loading ? (
          <p>Loading pets...</p> // Loading message
        ) : error ? (
          <p className='my-3 text-center text-red-600 bg-red-200 p-3 border-2 border-red-600'>{error}</p> // Error message
        ) : pets.length === 0 ? (
          <p className='text-center'>No pets available at the moment.</p> // Message when no pets are available
        ) : (
          <div className='pet-cards grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8'>
            {pets.map((pet) => (
              <PetCard
                key={pet.id}
                id={pet.id}
                breed={pet.breed}
                age={pet.age}
                gender={pet.gender}
                price={pet.price}
                image={pet.image} 
              />
            ))}
          </div>
        )}

        <button className='md:hidden border border-secondary w-full py-3 justify-center rounded-full flex items-center space-x-2'>
          <span>View more</span>
          <span>&gt;</span>
        </button>
      </div>
    </>
  );
};

export default Pets;