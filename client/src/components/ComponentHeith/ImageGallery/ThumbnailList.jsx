// ThumbnailList.jsx
import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import axios from 'axios';

const ThumbnailList = ({ setCurrentIndex, thumbnail }) => {



  const slideLeft = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  }




  return (
    <div className='relative flex items-center w-full md:w-auto'>
      <BsChevronCompactLeft className='opacity-50 cursor-pointer hover:opacity-100 text-white' onClick={slideLeft} size={30} />
      <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
        {thumbnail.map((item, index) => (
          <img
            className='w-[200px] h-[150px] inline-block p-2 rounded-2xl cursor-pointer hover:scale-105 ease-in-out duration-300'
            src={item}
            alt='Product Thumbnail'
            key={index}
            onClick={() => handleThumbnailClick(index)}

          />
        ))}
      </div>
      <BsChevronCompactRight className='opacity-50 cursor-pointer hover:opacity-100 text-white' onClick={slideRight} size={30} />
    </div>
  );
}

export default ThumbnailList;