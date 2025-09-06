import React from 'react'
import Banner from '../../assets/images/Homepage/last one/edit/Untitled-1.png'
import { CgPlayButtonO } from 'react-icons/cg';
import paw from '../../assets/logo/fontisto_paw.png'

const Banners2 = () => {
  return (
    <div className='relative  mx-44 mb-10'>
    
    <img 
      src={Banner} 
      alt="Banner" 
      className='object-contain w-[100%] h-[50%]  rounded-3xl hidden md:flex'
    />
    
   
    <div className='absolute inset-0 items-center  justify-start hidden md:flex'>
      <div className='text-accent md:w-[45rem] pl-[9rem]'>
            <div className='flex space-x-3 items-baseline'>
            <h1 className='text-5xl font-bold  md:text-6xl text-start '>
          Adoption
         
        </h1>
        <img src = {paw} className='w-[3rem] object-contain'/>
            </div>
       
        
        <h2 className='text-xl font-semibold md:text-4xl text-start'>
          We Need Help. So Do They.
        </h2>
        <p className='text-sm mt-2  md:mt-5 text-start'>
Adapt a petand give it a home   <br/> it will be love you back unconditionally    </p>
        
 
        <div className='flex space-x-3 mt-5 md:mt-10 justify-start'>
        <button className='text-white bg-secondary py-3 px-8 rounded-full'>
            Explore Now
          </button>
          <button className='border-2 border-secondary px-8 py-3  rounded-full flex items-center space-x-2'>
            <span>View Intro</span>
            <CgPlayButtonO  />
          </button>
  
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banners2