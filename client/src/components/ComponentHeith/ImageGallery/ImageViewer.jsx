import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import PopupImageViewer from './PopupImageViewer';
import { RxDotFilled } from 'react-icons/rx';
import axios from 'axios';

const ImageViewer = ({ setCurrentIndex, currentIndex, images }) => {



  const [showPopup, setShowPopup] = useState(false);



  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };


  const handleClick = () => {
    openPopup(currentIndex);
  };

  const openPopup = (index) => {
    setCurrentIndex(index);
    setShowPopup(true);
  }

  const closePopup = (index) => {
    setCurrentIndex(index);
    setShowPopup(true);
  }

  return (
    <div className='mx-auto w-full m-auto pt-4 px-4 relative group'>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-xl rounded-full p-2 bg-[#27272A]/50 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={18} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-xl rounded-full p-2 bg-[#27272A]/50 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={18} />
      </div>
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className='w-full h-[40vw] md:h-[40vh] lg:h-[50vh] mx-auto rounded-2xl bg-center bg-cover duration-500 cursor-pointer'
        onClick={handleClick}
      ></div>
      <div className='flex top-4 justify-center py-2'>
        {images.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl text-white cursor-pointer ${slideIndex === currentIndex ? 'text-2xl opacity-100' : 'opacity-50'}`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
      {showPopup && <PopupImageViewer images={images} currentIndex={currentIndex} onClose={closePopup} setShowPopup={setShowPopup} />}
    </div>
  );
};

export default ImageViewer;
