import React, {useState, useEffect} from 'react';
import {FaStar} from 'react-icons/fa';

const StarRating = ({rating, setRating}) => {

  const [hover, setHover] = useState(null);
  const ratingText = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great',
  };

  // useEffect(() => {
  //   console.log(rating);
  // }, [rating]);

  return (
    <div className="flex">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label className="mr-2">
            <input
              type="radio"
              name="rating"
              className="hidden"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
              }}
            />

            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#27272A" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        )
      })}

      <div className="ml-4">
        {rating && <p className="text-sm">{ratingText[rating]}</p>}
      </div>
    </div>
  )
};

export default StarRating;