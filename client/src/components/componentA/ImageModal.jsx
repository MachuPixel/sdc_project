import React from 'react';
import { RxDotFilled, RxExit } from 'react-icons/rx';

const ImageModal = ({ closeModal, imageUrl }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50" >
      <div className="absolute top-8 right-8 text-white cursor-pointer hover:text-[#78716C]">
        <RxExit onClick={closeModal} size={25} />
      </div>
      <div className="relative">
        <img src={imageUrl} alt="Full Image" className="max-h-[80vh] max-w-[80vw] rounded-2xl" />
      </div>

    </div>

  );
};

export default ImageModal;
