import React from 'react'
import bannerImg from '../../assets/images/Homepage/Hero Banner/edit/good-humored-woman-holds-dog-laughing-pink-background-emotional-sort-haired-girl-grey-hoodie-poses-with-corgi-isolated 1.png'
import { CgPlayButtonO } from "react-icons/cg";
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
const Hero = () => {
  return (
    
    <div className='relative bg-primary w-screen md:h-[45rem] h-[52rem] rounded-b-3xl'>
      <nav className='  hidden md:flex justify-between items-center  top-0 left-0 right-0 p-4  ml-[12rem] mr-[12rem]'>
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
     
    <nav className='md:hidden flex justify-between items-center top-0 left-0 right-0 p-4 z-50 pt-10'>
      
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
      
      <div className='absolute -left-[95px] -right-10 md:left-0 w-[528px] items-end md:w-screen inset-0  md:top-[9.6rem] flex justify-end  md:clip-auto clip-path-mobile '>
        <img 
          src={bannerImg} 
          alt="Hero" 
          className='object-cover md:w-[55%] w-[85%] md:h-full h-[60%] ' // Add clipping for mobile
        />
      </div>

      
      <div className='absolute mx-5 top-10 text-accent mt-20 md:w-[30rem] md:m-44'>
        <h1 className='text-5xl font-bold  md:text-6xl'>
          One More Friend
        </h1>
        <h2 className='text-xl font-semibold md:text-4xl'>
          Thousands More Fun!
        </h2>
        <p className='text-xs mt-2 md:text-base md:mt-5'>
          Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
        </p>
        <div className='flex space-x-3 mt-5 justify-center md:mt-10 md:justify-start'>
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
  )
}

export default Hero