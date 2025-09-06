import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import img1 from '../../assets/images/Dog/ShibaDog/Section 1 Image 7.png';
import img2 from '../../assets/images/Dog/ShibaDog/Section 1 Image 1.png';
import img3 from '../../assets/images/Dog/ShibaDog/Section 1 Image 2.png';
import img4 from '../../assets/images/Dog/ShibaDog/Section 1 Image 3.png';
import img5 from '../../assets/images/Dog/ShibaDog/Section 1 Image 4.png';
import img6 from '../../assets/images/Dog/ShibaDog/Section 1 Image 5.png';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Frame101 from '../../assets/logo/Frame101.png';
import Frame102 from '../../assets/logo/Frame102.png';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiShare2 } from "react-icons/fi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import axios from 'axios';
import PetCard from '../Custom Cards/PetCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderStyles.css';

const DogDetails = () => {
    const [pets, setPets] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
  
    useEffect(() => {
        const fetchPets = async () => {
          try {
            const response = await axios.get('https://monitor-backend-rust.vercel.app/api/pets');
            const limitedPets = response.data.slice(0, 4); // Fetch only the first 4 pets
            setPets(limitedPets);
            setLoading(false); 
          } catch (error) {
            console.error('Error fetching pet data:', error);
            setError('Error fetching pet data. Please try again later.'); 
            setLoading(false); 
          }
        };
        fetchPets();
      }, []);

      useEffect(() => {
        const fetchCustomers = async () => {
          try {
            const response = await axios.get('https://monitor-backend-rust.vercel.app/api/customers');
            const shibaInuCustomers = response.data.filter(customer => customer.pet === 'Shiba Inu');
            const uniqueCustomers = [...new Set(shibaInuCustomers.map(customer => customer.name))].map(name => {
              return shibaInuCustomers.find(customer => customer.name === name);
            });
            setCustomers(uniqueCustomers);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching customer data:', error);
            setError('Error fetching customer data. Please try again later.');
            setLoading(false);
          }
        };
        fetchCustomers();
      }, []);


      const sliderSettings = {
        dots: true,
        infinite: true, 
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    

  const images = [img1, img2, img3, img4, img5, img6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
 
    <div>
        {/* <div className='hidden md:flex'>
        <Header />
        </div> */}
        
        
        <Header />
       
        
      
      
     
      
      <div className='md:mx-[11rem] md:my-4 md:flex md:border rounded-3xl md:p-4'>
        {/* Image Section */}
        <div className='relative md:w-[40rem]'>
          <img src={images[currentIndex]} className='w-[35rem] h-[30rem] object-cover md:rounded-xl' alt='Shiba Inu' />
          <button onClick={handlePrev} className='absolute bottom-1/2 md:left-4 md:top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full opacity-50 hover:opacity-100'>
            <IoIosArrowBack className='text-black text-xl mx-auto' />
          </button>
          <button onClick={handleNext} className='absolute bottom-1/2 right-0 md:right-24 md:top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full opacity-50 hover:opacity-100 '>
            <IoIosArrowForward className='text-black text-xl mx-auto' />
          </button>

          {/* Thumbnails */}
          <div className='flex space-x-4 mt-4 w-[3.7rem] md:w-full object-contain '>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                className={`w-[5rem] h-[5rem] object-cover rounded-xl cursor-pointer ${index === currentIndex ? 'border-4 border-primary' : ''}`}
                onClick={() => setCurrentIndex(index)}
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>

          {/* Guarantees */}
          <div className='hidden md:flex justify-between md:mr-20 bg-primary my-3 px-3 py-2 rounded-xl mx-5  md:mx-0'>
            <p className='text-sm text-gray-800 font-semibold flex items-center gap-2'>
              <img src={Frame101} alt="Health Guarantee" /> 100% health guarantee for pets
            </p>
            <p className='text-sm text-gray-800 font-semibold flex items-center gap-2'>
              <img src={Frame102} alt="Identification Guarantee" /> 100% guarantee of pet identification
            </p>
          </div>

          {/* Share Icons */}
          <div className=' space-x-4 mt-5 mx-5 md:mx-0 hidden md:flex'>
            <div className='flex space-x-2 items-center'>
              <FiShare2 />
              <h2>Share:</h2>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-700"><FaFacebookF size={16} /></a>
              <a href="#" className="text-gray-600 hover:text-gray-700"><FaTwitter size={16} /></a>
              <a href="#" className="text-gray-600 hover:text-gray-700"><FaInstagram size={16} /></a>
              <a href="#" className="text-gray-600 hover:text-gray-700"><FaYoutube size={16} /></a>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className='mx-5 md:mx-0'>
          <div className='flex space-x-3 text-sm text-gray-500 mt-2 mb-4'>
            <p>Home</p> <span>&gt;</span> <p>Dog</p> <span>&gt;</span> <p>Large Dog</p> <span>&gt;</span> <p>Shiba Inu Sepia</p>
          </div>

          <div className='space-y-3'>
            <p className='text-gray-500 text-sm'>SKU #1000078</p>
            <h1 className='text-accent text-2xl font-semibold'>Shiba Inu Sepia</h1>
            <h1 className='text-secondary text-xl font-semibold'>34,000,000 VND</h1>

            <div className='flex space-x-3 my-5 m justify-start'>
              <button className='text-white bg-secondary py-2 px-8 rounded-full'>Contact us</button>
              <button className='border-2 border-secondary px-6 py-2 rounded-full flex items-center space-x-2'>
                <IoChatboxEllipsesOutline size={20} /> <span>Chat with Monito</span>
              </button>
            </div>
<div className='flex justify-between py-[1rem] md:hidden'>
    <div>
        <h2 className='font-semibold text-xl'>Information</h2>
    </div>
    <div className='flex space-x-2 items-center'>
    <FiShare2 />
    <p>Share</p>
    </div>
              
              
            </div>
           
            <div className='mt-10 px-3 md:w-[37rem] text-sm text-gray-500 md:pt-[1rem] '>

                <div className='flex  space-x-[13rem] my-3'>
                    <h3>
                    SKU
                    </h3>
                    <h3>
                    : #1000078
                    </h3>
                </div>
                <hr/>
                <div className='flex  space-x-[11.5rem] my-3'>
                    <h3>
                    Gender
                    </h3>
                    <h3>
                    : Female
                    </h3>
                </div>
                <hr/>
                <div className='flex  space-x-[13rem] my-3'>
                    <h3>
                    Age
                    </h3>
                    <h3>
                    : 02 months
                    </h3>
                </div>
                <hr/>
                <div className='flex  space-x-[13rem] my-3'>
                    <h3>
                    Size
                    </h3>
                    <h3>
                    : Small
                    </h3>
                </div>
                <hr/>
                <div className='flex  space-x-[12.4rem] my-3'>
                    <h3>
                    Color
                    </h3>
                    <h3>
                    : Appricont & Tan
                    </h3>
                </div>
                <hr/>
                <div className='flex  space-x-[10rem] my-3'>
                    <h3>
                    Vaccinated
                    </h3>
                    <h3>
                    : Yes
                    </h3>
                </div>
                <hr/>
                <div className='flex  space-x-[10.2rem] my-3'>
                    <h3>
                    Dewormed
                    </h3>
                    <h3>
                    : Yes
                    </h3>
                </div>
                <hr/>
                <div className='flex  space-x-[10.7rem] my-3'>
                    <h3>
                    Microchip
                    </h3>
                    <h3>
                    : Yes
                    </h3>
                </div>
                <hr/>
                <div className='flex  space-x-[11rem] my-3'>
                    <h3>
                   Location
                    </h3>
                    <h3>
                    : Vietnam
                    </h3>
                </div>
                <hr/>
                <div className='flex  space-x-[8.5rem] my-3'>
                    <h3>
                   Published Date
                    </h3>
                    <h3>
                    : 12 - Oct - 2025
                    </h3>
                </div>
                <hr/>
                <div className='flex  space-x-[5.7rem] my-3'>
                    <h3>
                   Additional Information
                    </h3>
                    <h3>
                    : <span>Pure breed Shih Tzu.<br/>
  Good body structure.<br/>
  With MKA cert and Microchip.<br/>
  Father from champion lineage.</span>
                    </h3>
                </div>
                <hr/>
              
            </div>
          </div>
        </div>
      </div>
      <div className='flex-col md:hidden justify-center space-y-3 md:mr-20 bg-primary my-3 px-4 py-4 rounded-xl mx-5  md:mx-0'>
            <p className='text-sm text-gray-800 font-semibold flex items-center gap-2'>
              <img src={Frame101} alt="Health Guarantee" /> 100% health guarantee for pets
            </p>
            <p className='text-sm text-gray-800 font-semibold flex items-center gap-2'>
              <img src={Frame102} alt="Identification Guarantee" /> 100% guarantee of pet identification
            </p>
          </div>
      <div className='mx-4 md:mx-0'>
      <h1 className='md:mx-[11rem] mt-5 text-2xl font-semibold'>Our Lovely Customer</h1>
      </div>


      {/* slider */}
      {/* <div className='md:mx-[11rem] mt-5'>
        {loading ? (
          <p>Loading customers...</p>
        ) : error ? (
          <p className='text-center text-red-600'>{error}</p>
        ) : customers.length === 0 ? (
          <p className='text-center'>No customers with Shiba Inu found.</p>
        ) : (
          <Slider {...sliderSettings}>
            {customers.map((customer) => (
              <div key={customer.name} className='flex items-center justify-center'>
                <img
                  src={customer.image}
                  alt={customer.name}
                  className='rounded-xl w-[15rem] h-[20rem] object-cover mx-auto'
                />
                
              </div>
            ))}
          </Slider>
        )}
      </div> */}

<div className='md:mx-[11rem] mt-5 grid grid-cols-2 md:grid-cols-4 gap-4 mx-4 ' >
        {loading ? (
          <p>Loading customers...</p> // Show loading message
        ) : error ? (
          <p className='text-center text-red-600'>{error}</p> // Show error message
        ) : customers.length === 0 ? (
          <p className='text-center'>No customers with Shiba Inu found.</p>
        ) : (
          customers.map((customer) => (
            <div key={customer.name} className='flex items-center justify-center'>
                <img
                  src={customer.image}
                  alt={customer.name}
                  className='rounded-xl w-[15rem] h-[20rem] object-cover mx-auto'
                />
                
              </div>
          ))
        )}
      </div>

     <div>
     <div className='md:mx-44 my-16 mx-5'>
        <div className='flex justify-between'>
          <div>
            <h3>What's new?</h3>
            <h1 className='text-2xl font-semibold text-secondary'>
              See more puppies
            </h1>
          </div>
          <div>
            <button className='hidden md:flex border border-secondary px-8 py-2 rounded-full flex items-center space-x-2'>
              <span>View more</span>
              <span>&gt;</span>
            </button>
          </div>
        </div>

        {loading ? (
          <p>Loading pets...</p> // Loading message
        ) : error ? (
          <p className='my-3 text-center text-red-600 bg-red-200 p-3 border-2 border-red-600'>{error}</p> // Error message
        ) : pets.length === 0 ? (
          <p className='text-center'>No pets available at the moment.</p> // Message when no pets are available
        ) : (
          <div className='pet-cards grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8'>
            {pets.map((pet) => (
              <PetCard
                key={pet.id}
                id={pet.id}
                breed={pet.breed}
                age={pet.age}
                gender={pet.gender}
                price={pet.price}
                image={pet.image} 
              />
            ))}
          </div>
        )}

        <button className='md:hidden border border-secondary w-full py-3 justify-center rounded-full flex items-center space-x-2'>
          <span>View more</span>
          <span>&gt;</span>
        </button>
      </div>
     </div>
    </div>
  );
};

export default DogDetails;