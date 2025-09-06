import React from 'react';
import sponsers from '../../assets/images/Homepage/last one/edit/Frame 40.png'
const PSellers = () => {
  return (
    <section className='hidden md:flex mx-[11rem] mb-10'>
      <div>
        <div className='flex justify-between'>
          <div className='items-baseline space-x-2 flex'>
            <h3 className='font-medium tracking-wide'>Proud to be part of</h3>
            <span className='text-2xl font-semibold tracking-wider'>Pet Sellers</span>
          </div>
          <div>
            <button className='absolute md:flex border border-secondary px-8 py-2 rounded-full flex items-center space-x-2 right-0 mx-[11rem]'>
              <span className='font-light text-sm'>View all our sellers</span>
              <span>&gt;</span>
            </button>
          </div>
        </div>
        <img className='mt-10 w-[90rem]' src = {sponsers}/>
      </div>
    </section>
  );
}

export default PSellers;