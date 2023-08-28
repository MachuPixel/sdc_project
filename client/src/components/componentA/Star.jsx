import React from 'react';
import outlineStar from '../resources/outlineStar.svg';
import starOneQuarter from '../resources/star-one-quarter.svg';
import starHalf from '../resources/star-half.svg';
import starThreeQuarter from '../resources/star-three-quarter.svg';
import fullStar from '../resources/fullStar.svg';


export const QuarterStars = (rating) => {
    rating = rating || 0;
    let stars = [];
    while (stars.length < 5) {
        if (rating > 1) {
            stars.push(1);
        } else if (rating > 0) {
            let empty = Math.abs(0 - rating);
            let quart = Math.abs(0.25 - rating);
            let half = Math.abs(0.5 - rating);
            let three = Math.abs(0.75 - rating);
            let full = Math.abs(1 - rating);
            let closest = Math.min(empty, quart, half, three, full);
            switch (closest) {
                case (empty):
                    stars.push(0);
                    break;
                case quart:
                    stars.push(0.25);
                    break;
                case half:
                    stars.push(0.5);
                    break;
                case three:
                    stars.push(0.75);
                    break;
                case full:
                    stars.push(1.0);
                    break;
                default:
                    console.log("OOPS");
                    stars.push(0);
                    break;
            }
        } else {
            stars.push(0);
        }
        rating = rating - 1;
    }
    return stars;
  };

const Star = ({rating}) => {

  const stars = QuarterStars(rating);

  return (
    <div className="star-rating inline-flex">
      {stars.map((item, i) => {
                return (
                    <div className="single-star-container" key={i}>

                        {item === 0 && <img className="single-star-outline h-6 w-6" src={outlineStar} alt="outlineStar alt" />}
                        {item === 0.25 && <img className="single-star-outline h-6 w-6" src={starOneQuarter} alt="starOneQuarter alt" />}
                        {item === 0.5 && <img className="single-star-outline h-6 w-6" src={starHalf} alt="starHalf alt" />}
                        {item === 0.75 && <img className="single-star-outline h-6 w-6" src={starThreeQuarter} alt="starThreeQuarter alt" />}
                        {item === 1 && <img className="single-star-outline h-6 w-6" src={fullStar} alt="fullStar alt" />}

                    </div>
                );
            })}
    </div>
  );
};

export default Star;