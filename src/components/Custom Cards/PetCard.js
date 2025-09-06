import React from 'react';

const PetCard = ({ id, breed, age, gender, price, image }) => {
  return (
    <div className='custom-card  rounded-lg p-2  shadow-sm pb-5'>
      <img src={image} alt={breed} className='md:w-72 md:h-72 w-48 h-48 object-cover rounded-md mb-4 mx-auto' />
      <h2 className='md:text-lg mx-2 font-semibold mb-1'>{id} - {breed}</h2>
      <p className='mx-2 text-sm text-gray-500'>Gene: <strong>{gender}</strong></p>
      <p className='mx-2 text-sm text-gray-500 mb-2'>Age: <strong>{age}</strong></p>
     
      
      <p className='mx-2'><strong>{price}</strong> </p>
      
    
    </div>
  );
};

export default PetCard;