import React, {useEffect, useState} from 'react';
import ReviewEntry from './ReviewEntry.jsx'
import RatingSummary from './RatingSummary.jsx'
import axios from 'axios';
import Modal from './Modal.jsx';

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [unfilteredReviews, setUnfilteredReviews] = useState([]);
  const [visible, setVisible] = useState(2);
  const [openModal, setOpenModal] = useState(false);
  const [sortingOption, setSortingOption] = useState('');

  const sortReviews = (option) => {
    let sortedReviews = [...reviews];
    switch (option) {
      case "Helpful":
        sortedReviews.sort((a, b) => b.helpfulness - a.helpfulness);
        break;
      case "Newest":
        sortedReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "Relevant":
        sortedReviews.sort((a, b) => {
          const relevanceA = a.helpfulness / Math.max(1, new Date() - new Date(a.date));
          const relevanceB = b.helpfulness / Math.max(1, new Date() - new Date(b.date));
          return relevanceB - relevanceA;
        });
        break;
      default:
        break;
    }
    setReviews(sortedReviews);
  };

  useEffect(() => {
    sortReviews(sortingOption);;
  }, [sortingOption]);

  const fetchReviews = () => {
    return axios.get('reviews/getAllReviews')
      .then(response => {
        setReviews(response.data);
        setUnfilteredReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  };


  const showMoreReviews = () => {
    setVisible((prevValue) => prevValue + 2);
  };

  const showLoadMoreButton = reviews.length > visible;

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
<div className="bg-[#27272A] flex items-center justify-center p-12 pt-24">
  <div className="flex w-full md:w-[150vh] p-12 bg-[#78716C] text-neutral-800 rounded-2xl">
    <div className="w-1/3">
      <RatingSummary reviews={reviews} unfilteredReviews={unfilteredReviews} setReviews={setReviews} />
    </div>
    <div className="reviews-module w-2/3">
      <div className="reviewSort flex">
        <h2>{reviews.length} reviews, sorted by </h2>
        <select
          className="bg-[#78716C]"
          value={sortingOption}
          onChange={(e) => setSortingOption(e.target.value)}
          >

          <option value="Helpful">Helpful</option>
          <option value="Newest">Newest</option>
          <option value="Relevant">Relevant</option>
        </select>
      </div>

      <div className="overflow-y-auto h-96 reviews-list" style={{ border: 'none', outline: 'none' }}>
        {reviews.slice(0, visible).map((review, index) => (
          <ReviewEntry review={review} key={index} />
        ))}
      </div>

      <div className="flex justify-between items-center my-4">
    {showLoadMoreButton && (
      <button className="load-more-button px-8 rounded bg-neutral-800 p-3 text-white pr-6  hover:text-[#78716C]" onClick={showMoreReviews}>
        More Reviews
      </button>
    )}

    <button className="add-review-button px-8 rounded bg-neutral-800 p-3 text-white pl-6  hover:text-[#78716C]" onClick={() => setOpenModal(true)}>Add a Review</button>
  </div>

      {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} reviews={reviews} setReviews={setReviews}/>}


    </div>
  </div>
</div>


  );
};

export default ReviewsList;