import React from 'react';
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';

const Share = ({ closeShare }) => {

  const handleExit = () => {
    closeShare(false)

  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50"
      onClick={handleExit}>
      <div className="bg-[#27272A] py-14 px-16 rounded-lg text-white text-center">
        <p className="text-xl mb-4">Share on social media</p>


        <ul className="flex space-x-8 cursor-pointer">
          <li className="hover:text-[#78716C]">
            <a onClick={handleExit}>
              <AiFillFacebook size={30} />
            </a>
          </li>
          <li className="hover:text-[#78716C]">
            <a onClick={handleExit}>
              <AiOutlineTwitter size={30} />
            </a>
          </li>
          <li className="hover:text-[#78716C]">
            <a onClick={handleExit}>
              <AiOutlineInstagram size={30} />
            </a>
          </li>
          <li className="hover:text-[#78716C]">
            <a onClick={handleExit}>
              <BsPinterest size={28} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Share;
