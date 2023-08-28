import React from 'react';
import { AiFillShopping } from 'react-icons/ai';
import hero from '../../img/model.jpg'

const HeroSection = () => {

  // Function to scroll to the "overview" section when the button is clicked
  const scrollToOverview = () => {
    const overviewElement = document.getElementById('overview');
    if (overviewElement) {
      overviewElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-[87vh] bg-gray-100 relative">
      <img
        src={hero}
        alt="hero Section"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="text-5xl text-center">
          <p>Quality. Style. ÉLIER</p>
          <p className='text-xl'>Crafting Elegance & Wearing Dreams</p>
        </div>
        <div>
          <button
            onClick={scrollToOverview}
            className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-[#27272A] hover:bg-[#78716C] active:bg-[#27272A] transition ease-in-out duration-150"
          >
            Shop Now
            <AiFillShopping className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
