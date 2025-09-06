import React from 'react'
import banner1 from '../../assets/images/SmallDog/banner 1.jpg'
import banner2 from '../../assets/images/SmallDog/banner 2.jpg'
import { CgPlayButtonO } from 'react-icons/cg'

const SmallDogBanner = () => {
  return (
    <div className='md:mx-[11rem] mb-5 mx-4'>
        <div className='flex space-x-3  md:text-sm text-gray-500 mt-2 mb-4'>
            <p>Home</p>
            <span>&gt;</span>
            <p>Dog</p>
            <span>&gt;</span>
            <p>Small Dog</p>
        </div>
        
        <div className='hidden md:flex'>
            <div>
                <img src={banner1}
                className='rounded-[20px]'
                 />
             </div>
             <div className='absolute -inset-20 items-center bottom-[10rem] right-[13rem]  justify-end pr-12 hidden md:flex'>
        <div className='text-white md:w-[30rem] '>
          <h1 className='text-5xl font-bold  md:text-6xl text-end'>
            One More Friend
          </h1>
          <h2 className='text-xl font-semibold md:text-4xl text-end'>
            Thousands More Fun!
          </h2>
          <p className=' font-thin text-xs mt-2 md:text-base md:mt-5 text-end'>
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
          </p>
          
          {/* Buttons */}
          <div className='flex space-x-3 mt-5 md:mt-10 justify-end'>
            <button className='border-2 border-white px-8 py-3  rounded-full flex items-center space-x-2'>
              <span>View Intro</span>
              <CgPlayButtonO />
            </button>
    
            <button className='text-secondary bg-white py-3 px-8 rounded-full'>
              Explore Now
            </button>
          </div>
        </div>
      </div>
        
        </div>
        
        <div className='md:hidden'>
        <div>
                <img src={banner2}
                className='rounded-[20px] mx-auto'
                 />
             </div>
             <div className='absolute inset-0 items-center  top-[11rem] left-[3rem] justify-end pr-12 '>
        <div className='text-secondary  '>
          <h1 className='text-4xl font-bold  md:text-6xl text-start'>
            One More Friend
          </h1>
          <h2 className='text-2xl font-semibold md:text-4xl text-start'>
            Thousands More Fun!
          </h2>
          <p className=' text-black  text-sm mt-2 md:text-base  text-start'>
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
          </p>
          
          {/* Buttons */}
          <div className='flex space-x-3 mt-5 md:mt-10 justify-center'>
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
    </div>
  )
}

export default SmallDogBanner