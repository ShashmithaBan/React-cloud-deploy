import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import frame from '../../assets/logo/Frame.png'

const Footer = () => {
  return (
    <footer className="bg-[#f7e7ce] pt-10 md:pt-20 px-5 pb-10 text-center md:rounded-t-[50px]">
        <div className='md:mx-[9.5rem]'>
            {/* Email Subscription Section */}
      <div className="mb-10  md:flex   md:space-x-16 bg-secondary py-6 px-6 md:px-9 rounded-xl">
        <h3 className="text-2xl text-white mb-4 w-[22rem] text-left font-semibold my-auto">Register Now So You Don't Miss Our Programs</h3>
        <div className="md:flex justify-center items-center md:space-x-3 bg-white px-3 py-3 rounded-xl md:h-[4.5rem] md:space-y-0 space-y-3">
          <input 
            type="email" 
            placeholder="Enter your Email" 
            className="py-3 w-[38rem] pl-5 border border-gray-500 rounded-lg  max-w-full"
          />
          <button className="bg-secondary w-full md:w-[12rem] text-white py-3 px-6 rounded-lg hover:bg-accent">
            Subscribe Now
          </button>
        </div>
      </div>
      <div className='md:flex  justify-between '>
{/* Navigation Links */}
<div className="mb-10">
        <ul className="flex justify-center space-x-12">
          <li><a href="#" className="text-[#002744] hover:underline">Home</a></li>
          <li><a href="#" className="text-[#002744] hover:underline">Category</a></li>
          <li><a href="#" className="text-[#002744] hover:underline">About</a></li>
          <li><a href="#" className="text-[#002744] hover:underline">Contact</a></li>
        </ul>
      </div>

      {/* Social Media Icons */}
      <div className="mb-10">
        <ul className="flex justify-center space-x-8">
        <a href="#" className="mx-2 text-[#002744] hover:text-[#001F33]"><FaFacebookF size={24} /></a>
        <a href="#" className="mx-2 text-[#002744] hover:text-[#001F33]"><FaTwitter size={24} /></a>
        <a href="#" className="mx-2 text-[#002744] hover:text-[#001F33]"><FaInstagram size={24} /></a>
        <a href="#" className="mx-2 text-[#002744] hover:text-[#001F33]"><FaYoutube size={24} /></a>
        </ul>
      </div>
      </div>

      <hr className="bg-gray-300 h-[0.1rem] border-0" />

      {/* Footer Bottom */}
      {/* <div className="text-gray-500 text-sm md:flex justify-between mt-14 mb-10">
  <p className="order-3 md:order-none">©️ 2022 Monito. All rights reserved.</p>
  <img src={frame} className="order-1 md:order-none" />
  <div className="mt-2 space-x-12 order-2 md:order-none">
    <a href="#" className="hover:underline">Terms of Service</a>
    <a href="#" className="hover:underline">Privacy Policy</a>
  </div>
</div> */}
      {/* Footer Bottom */}
      <div className="hidden md:flex text-gray-500 justify-center text-sm  md:justify-between mt-14 mb-10">
        <p>©️ 2022 Monito. All rights reserved.</p>
        <img src ={frame} />
        <div className="mt-2 space-x-12">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
      <div className=" md:hidden text-gray-500 justify-center text-sm  md:justify-between mt-14 mb-6 space-y-5">
      <img src ={frame} className='mx-auto' />
        <div className="mt-2 space-x-12">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
        <p className='font-light'>©️ 2022 Monito. All rights reserved.</p>
      </div>
        </div>
      
    </footer>

  )
}

export default Footer