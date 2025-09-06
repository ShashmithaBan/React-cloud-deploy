import React from 'react';
import Banner from '../../assets/images/Homepage/Otherone/edit/Untitled-1.png';
import { CgPlayButtonO } from 'react-icons/cg';

const Banner1 = () => {
  return (
    <div className='relative  mx-44'>
   
      <img 
        src={Banner} 
        alt="Banner" 
        className='object-contain w-[100%]  rounded-3xl hidden md:flex'
      />
      
  
      <div className='absolute inset-0 flex items-center  justify-end pr-12 hidden md:flex'>
        <div className='text-accent md:w-[30rem] jus'>
          <h1 className='text-5xl font-bold  md:text-6xl text-end'>
            One More Friend
          </h1>
          <h2 className='text-xl font-semibold md:text-4xl text-end'>
            Thousands More Fun!
          </h2>
          <p className='text-xs mt-2 md:text-base md:mt-5 text-end'>
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
          </p>
          
          {/* Buttons */}
          <div className='flex space-x-3 mt-5 md:mt-10 justify-end'>
            <button className='border-2 border-secondary px-8 py-3  rounded-full flex items-center space-x-2'>
              <span>View Intro</span>
              <CgPlayButtonO />
            </button>
    
            <button className='text-white bg-secondary py-3 px-8 rounded-full'>
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;