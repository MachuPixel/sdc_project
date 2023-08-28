import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiFillShopping } from 'react-icons/ai';
import HeroSection from './HeroSection.jsx';
import logo from '../../img/logo.png';

const Header = () => {
  // State variable to control navigation menu visibility
  const [nav, setNav] = useState(true);

  // Function to toggle the navigation menu
  const handleNav = () => {
    setNav(!nav);
  };

  // Function to scroll to the "about" section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to scroll to the "overview" section
  const scrollToOverview = () => {
    const overviewElement = document.getElementById('overview');
    if (overviewElement) {
      overviewElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Render the component's JSX
  return (
    <div>
      {/* Header section */}
      <header className='flex justify-between items-center h-[13vh]  text-white bg-[#222222] px-8'>
        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className="w-60 h-[14vh] ml-4" />
        </div>

        {/* Navigation menu */}
        <nav>
          <ul className="hidden md:flex">
            <li className='p-4 text-xl'><a href="/" className='hover:text-[#78716C]'>Home</a></li>
            <li className='p-4 text-xl'><a onClick={scrollToOverview} className='hover:text-[#78716C] cursor-pointer'>Shop</a></li>
            <li className='p-4 text-xl'><a
              onClick={scrollToAbout}
              className='hover:text-[#78716C] cursor-pointer'>
              About
            </a></li>
            <li className='p-4 text-xl'><a href="/" className='hover:text-[#78716C]'>Contact</a></li>
            <li className='p-4 text-xl group'><AiFillShopping size={22} className='transition-color group-hover:text-[#78716C] cursor-pointer' /></li>
          </ul>
        </nav>

        {/* Hamburger menu */}
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Side navigation menu */}
        <div className={!nav ? 'fixed  z-50 left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#222222] ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
          <ul className="pt-24 uppercase ">
            <li className='p-4 border-b border-white'><a href="/">Home</a></li>
            <li className='p-4 border-b border-white'><a href="/">Shop</a></li>
            <li className='p-4 border-b border-white'><a onClick={scrollToAbout}>About</a></li>
            <li className='p-4 border-b border-white'><a href="/">Contact</a></li>
          </ul>
        </div>
      </header>

      {/* Render the HeroSection component */}
      <HeroSection />
    </div>
  );
};

export default Header;
