import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Ensure Font Awesome is imported
import { IoSearchOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa"; 
import Frame from '../../assets/logo/Frame.png'

const items = [
  {
    title: 'Home',
    links: '/'
  },
  {
    title: 'Category',
    links: '/category'
  },
  {
    title: 'About',
    links: '/about'
  },
  {
    title: 'Contact',
    links: '/contact'
  },
];

const Header = () => {
  return (
    <div>
      <nav className='  hidden md:flex justify-between items-center  top-0 left-0 right-0 p-4  z-50 ml-[12rem] mr-[12rem]'>
        <div>
            
        </div>
        <div className='logo text-2xl font-bold'>
         <img src ={Frame}/>
        </div>
        <ul className='flex space-x-4'>
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.links} className="text-gray-700 hover:text-blue-500">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className='search-bar relative'>
          <IoSearchOutline className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl' />
          <input
            type='text'
            placeholder='Search something here!'
            className='search-input w-[18rem] p-3 pl-12 rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div>
          <button className='text-white bg-secondary py-3 px-8 rounded-full font-semibold'>
            Join the community
          </button>
        </div>
        <div>
          <select id="options" className="rounded p-2 border-transparent  bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">VND</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>
      </nav>
     
    <nav className='md:hidden flex justify-between items-center top-0 left-0 right-0 p-4 z-50 mt-5'>
      
      {/* Hamburger Menu on the Left */}
      <div className="hamburger-menu">
        <FaBars className="text-gray-700 text-2xl" />
      </div>

      {/* Logo in the Center */}
      <div className='logo text-2xl font-bold'>
        <img
        src={Frame}
        />
       
      </div>

      {/* Search Button on the Right */}
      <div className='search-button'>
        <IoSearchOutline className='text-secondary text-3xl' />
      </div>
    </nav>
  

     
      
    </div>
  );
}

export default Header;