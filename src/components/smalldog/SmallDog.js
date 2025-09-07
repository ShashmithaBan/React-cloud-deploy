import React, { useState } from 'react';
import Header from '../header/Header';
import SmallDogBanner from '../Banners/SmallDogBanner';
import Filter from './Filter';
import Dog from './Dog';

const SmallDog = () => {
  const [filters, setFilters] = useState({
    gender: [],
    color: [],
    minPrice: '',
    maxPrice: '',
    breed: [],
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
   
  };

  return (
    <>
    
      <Header />
      <SmallDogBanner />
      <h2>Small Dog Section</h2> 
      <div className='md:mx-[11rem] md:grid md:grid-cols-12'>
        <div className='md:col-span-2'>
          <Filter onFilterChange={handleFilterChange} />
        </div>
        <div className='md:col-span-10 '>
         <Dog/>
        </div>
      </div>
    </>
  );
};

export default SmallDog;