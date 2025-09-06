import React from 'react';
import chris from '../../assets/logo/Group.png'

const ProductCard = ({ name, product, size, price, description, image }) => {
  return (
    <div className=' rounded-lg p-2 shadow-md pb-5'>
      <img src={image} alt={name} className='w-80 h-80 object-cover rounded-lg mb-3 mx-auto' />
      <h2 className='text-lg font-semibold w-64 mx-2'>{name}</h2>
      <div className='flex my-2'>
      <p className='text-sm text-gray-500 mx-2 font-normal'>Product : <strong>{product}</strong></p>
      <p className='text-sm mx-2 text-gray-500'>Size : <strong>{size}</strong></p>
      </div>
      
      <p className='text-lg font-semibold mx-2'>{price}</p>
      <p className='text-sm text-gray-800 text-center bg-primary py-2 font-semibold mt-2 flex justify-center gap-2 items-center'>
  <img src={chris} alt="Chris" />
  <span>&bull;</span> 
  {description}
</p>
    </div>
  );
};

export default ProductCard;