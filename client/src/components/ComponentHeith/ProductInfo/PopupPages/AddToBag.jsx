import React from 'react';

const AddToBag = ({ selectedStyle, selectedSize, name, price, checkoutItem }) => {
  console.log(checkoutItem);
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
      <div className="bg-[#27272A] py-6 px-12 rounded-lg text-white text-lg tracking-wide">
        <div className="flex flex-col items-center">
          <p className="mb-4 font-bold">Item added to bag!</p>

          <div className="flex items-center space-x-6">
            {/* Left side (image) */}
            <div className="flex-shrink-0">
              <img
                src={checkoutItem}
                alt={name}
                className="w-40 h-40 object-cover rounded-xl "
              />
            </div>

            {/* Right side (text information) */}
            <div className="ml-8">
              <p className="text-xl font-semibold mb-1">{name}</p>
              <p className="text-gray-300 mb-1">${price}</p>
              <p className="text-gray-300 mb-1">Color: {selectedStyle}</p>
              <p className="text-gray-300 mb-1">Size: {selectedSize}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToBag;
