import React, { useState, useEffect } from 'react';
import Star from './Star.jsx';
import axios from 'axios';

const Reviews = () => {

  const [ratingsData, setRatingsData] = useState({});

  // Scroll to reviews section when clicked
  const handleReviewsClick = () => {
    const reviewElement = document.getElementById('reviews');
    if (reviewElement) {
      reviewElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  // Fetch ratings data from server on component mount
  useEffect(() => {
    axios.get('/reviews/getRatings')
      .then(response => {
        setRatingsData(response.data.ratings);
      })
      .catch(error => {
        console.error('Error fetching ratings:', error);
      });
  }, []);

  // Calculate the average rating based on rating counts
    const calculateAverageRating = (ratingCounts) => {
    const ratingArray = Object.keys(ratingCounts);
    let sumRating = 0;
    ratingArray.forEach(rating => (sumRating += rating * ratingCounts[rating]));
    const reviewTotal = ratingArray.reduce((accu, rating) => accu + parseInt(ratingCounts[rating]), 0);
    return reviewTotal === 0 ? 0 : sumRating / reviewTotal;
  };
  const averageRating = calculateAverageRating(ratingsData);

  // Calculate the total number of reviews based on ratings
  const numberOfReviews = (ratings) => {
    let total = 0;
    const ratingArray = Object.values(ratings);
    ratingArray.forEach(count => {
      total += parseInt(count); // Add each count to the total
    });

    return total;

  }

  const totalReviews = numberOfReviews(ratingsData);

// Render reviews component
  return (
    <div className='flex items-center text-white pt-4 cursor-pointer hover:text-[#b7b4b1] px-2'
      onClick={handleReviewsClick}>
      <section className='mr-2'>REVIEWS ({totalReviews})</section>
      <Star rating={averageRating} />
    </div>
  );
};

export default Reviews;
