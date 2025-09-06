import React, { useState, useEffect } from 'react';

const Filter = ({ onFilterChange }) => {
  const [gender, setGender] = useState([]);
  const [color, setColor] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [breed, setBreed] = useState([]);

 
  useEffect(() => {
    onFilterChange({ gender, color, minPrice, maxPrice, breed });
  }, [gender, color, minPrice, maxPrice, breed, onFilterChange]);

  const handleGenderChange = (e) => {
    const value = e.target.value;
    setGender((prev) =>
      prev.includes(value) ? prev.filter((g) => g !== value) : [...prev, value]
    );
  };

  const handleColorChange = (e) => {
    const value = e.target.value;
    setColor((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  const handleBreedChange = (e) => {
    const value = e.target.value;
    setBreed((prev) =>
      prev.includes(value) ? prev.filter((b) => b !== value) : [...prev, value]
    );
  };

  return (
    <div className='p-4 hidden md:flex'>
      <div>
        <h2 className='text-2xl text-secondary font-semibold'>Filter</h2>

        <div className='mt-2 mb-4'>
          <h3 className='font-semibold mb-2'>Gender</h3>
          <div className='flex flex-col'>
            <label>
              <input type="checkbox" value="Male" onChange={handleGenderChange} /> Male
            </label>
            <label>
              <input type="checkbox" value="Female" onChange={handleGenderChange} /> Female
            </label>
          </div>
        </div>
        <hr />

        <div className='mt-2 mb-4'>
          <h3 className='font-semibold mb-2'>Color</h3>
          <div className='flex flex-col'>
            {['Red', 'Apricot', 'Black', 'Black & White', 'Silver', 'Tan'].map((colorOption) => (
              <label key={colorOption}>
                <input type="checkbox" value={colorOption} onChange={handleColorChange} /> {colorOption}
              </label>
            ))}
          </div>
        </div>
        <hr />

        <div className='mt-2 mb-4'>
          <h3 className='font-semibold mb-2'>Price</h3>
          <div className='flex'>
            <input
              type="number"
              placeholder="Min Price"
              onChange={(e) => setMinPrice(e.target.value)}
              value={minPrice}
              className='border p-1 mr-2 w-24'
            />
            <input
              type="number"
              placeholder="Max Price"
              onChange={(e) => setMaxPrice(e.target.value)}
              value={maxPrice}
              className='border p-1 w-24'
            />
          </div>
        </div>
        <hr />

        <div className='mt-2'>
          <h3 className='font-semibold mb-2'>Breed</h3>
          <div className='flex flex-col'>
            {['Small', 'Medium', 'Large'].map((breedOption) => (
              <label key={breedOption}>
                <input type="checkbox" value={breedOption} onChange={handleBreedChange} /> {breedOption}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;