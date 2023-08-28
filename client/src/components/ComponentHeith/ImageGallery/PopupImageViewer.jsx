import React from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled, RxExit } from 'react-icons/rx';

const PopupImageViewer = ({ images, currentIndex, onClose, setShowPopup }) => {

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    onClose(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    onClose(newIndex);
  };

  const goToSlide = (slideIndex) => {
    onClose(slideIndex);
  };

  const exitPopup = () => {
    setShowPopup(false)
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="absolute top-8 right-8 text-white cursor-pointer hover:text-[#78716C]">
        <RxExit onClick={exitPopup} size={25} />
      </div>

      <div className="absolute hidden group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-xl rounded-full p-2 bg-[#27272A]/50 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className="absolute hidden group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-xl rounded-full p-2 bg-[#27272A]/50 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="relative">
        <img src={images[currentIndex]} alt="Full Image" className="max-h-[80vh] max-w-[80vw] rounded-2xl" />
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
      </div>
    </div>
  );
};

export default PopupImageViewer;
