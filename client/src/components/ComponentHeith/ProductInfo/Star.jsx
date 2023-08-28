import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Star = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const remaining = rating - fullStars;

  const starElements = [];

  for (let i = 0; i < fullStars; i++) {
    starElements.push(<FaStar key={i} />);
  }

  if (remaining > 0 && remaining < 1) {
    starElements.push(<FaStarHalfAlt key="half" />);
  }

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    starElements.push(<FaRegStar key={`empty-${i}`} />);
  }

  return <div className='flex'>{starElements}</div>;
};

export default Star;
