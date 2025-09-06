import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PetCard from '../Custom Cards/PetCard';

const Dog = () => {
  const [pets, setPets] = useState([]); // Combined pets
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of items per page
  const [hasFetchedSecondBatch, setHasFetchedSecondBatch] = useState(false); // Track second fetch

  useEffect(() => {
    const fetchFirstBatch = async () => {
      try {
        const response = await axios.get('https://monitor-backend-rust.vercel.app/api/pets?limit=20'); // Fetch first set of pets
        setPets(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching pet data:', error);
        setError('Error fetching pet data. Please try again later.');
        setLoading(false);
      }
    };

    fetchFirstBatch();
  }, []);

  // Fetch second batch of data when needed (on page 2 or more)
  useEffect(() => {
    const fetchSecondBatch = async () => {
      if (currentPage > 1 && !hasFetchedSecondBatch) {
        setLoading(true);
        try {
          const response = await axios.get('https://monitor-backend-rust.vercel.app/api/pets?offset=20&limit=20'); // Fetch second batch of pets
          setPets((prevPets) => [...prevPets, ...response.data]); // Append second batch to the existing pets
          setHasFetchedSecondBatch(true); // Set flag to true so we don't refetch it
        } catch (error) {
          console.error('Error fetching pet data:', error);
          setError('Error fetching more pet data. Please try again later.');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchSecondBatch();
  }, [currentPage, hasFetchedSecondBatch]);

  // Get the current pets for pagination
  const indexOfLastPet = currentPage * itemsPerPage;
  const indexOfFirstPet = indexOfLastPet - itemsPerPage;
  const currentPets = pets.slice(indexOfFirstPet, indexOfLastPet);

  // Calculate the total number of pages
  const totalPages = Math.ceil(pets.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='p-4'>
      <div className='justify-between md:flex'>
        <div className='flex items-baseline space-x-3'>
          <h1 className='text-2xl font-semibold text-secondary'>Small Dog</h1>
          <h3 className='text-gray-400'>{pets.length} puppies</h3>
        </div>
        <div>
          <button className='hidden md:flex border border-secondary px-8 py-2 rounded-full  items-center space-x-2'>
            <span>View more</span>
            <span>&gt;</span>
          </button>
        </div>
      </div>

      {loading ? (
        <p>Loading pets...</p>
      ) : error ? (
        <p className='my-3 text-center text-red-600 bg-red-200 p-3 border-2 border-red-600'>{error}</p>
      ) : pets.length === 0 ? (
        <p className='text-center'>No pets available at the moment.</p>
      ) : (
        <div>
          {/* Pet cards grid */}
          <div className='pet-cards grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8'>
            {currentPets.map((pet) => (
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

   
          <div className='mt-8 flex justify-center items-center space-x-2'>
            
            <button
              className={`px-4 py-2 rounded-xl ${currentPage === 1 ? 'text-gray-200 cursor-not-allowed' : ' text-secondary'}`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt; -
            </button>

           
            <nav className='inline-flex'>
              {[...Array(totalPages).keys()].map((page) => (
                <button
                  key={page}
                  className={`mx-1 px-3 py-2 rounded-xl ${currentPage === page + 1 ? 'bg-secondary text-white' : 'text-gray-600'}`}
                  onClick={() => handlePageChange(page + 1)}
                >
                  {page + 1}
                </button>
              ))}
            </nav>

            
            <button
              className={`px-4 py-2 rounded-xl ${currentPage === totalPages ? 'text-gray-200 cursor-not-allowed' : ' text-secondary'}`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              - &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dog;