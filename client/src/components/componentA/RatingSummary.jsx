import React, {useState, useEffect} from 'react';
import Star from './Star.jsx';
import axios from 'axios';
import ReviewBar from './ReviewBar.jsx';
import CharacterBar from './CharacterBar.jsx';
import { FaTimes } from 'react-icons/fa';

const RatingSummary = ({reviews, unfilteredReviews, setReviews}) => {

  const characteristicsData = [
    {
      title: 'Size',
      meanings: [
      'A size too small',
      '½ a size too small',
      'Perfect',
      '½ a size too big',
      'A size too wide',
    ],
  },
  {
    title: 'Width',
    meanings: [
    'Too narrow',
    'Slightly narrow',
    'Perfect',
    'Slightly wide',
    'Too wide',
    ],
  },
  {
    title: 'Comfort',
    meanings: [
    'Uncomfortable',
    'Slightly uncomfortable',
    'Ok',
    'Comfortable',
    'Perfect',
    ],
  },
  {
    title: 'Quality',
    meanings: [
    'Poor',
    'Below average',
    'What I expected',
    'Pretty great',
    'Perfect',
    ],
  },
  {
    title: 'Length',
    meanings: [
    'Runs Short',
    'Runs slightly short',
    'Perfect',
    'Runs slightly long',
    'Runs long',
    ],
  },
  {
    title: 'Fit',
    meanings: [
    'Runs tight',
    'Runs slightly tight',
    'Perfect',
    'Runs slightly long',
    'Runs long',
    ],
  },
]

  const [ratingsData, setRatingsData] = useState(null);
  const [activeFilters, setActiveFilters] = useState([]);

  const fetchRatings = () => {
    return axios.get('reviews/getRatings')
      .then(response => {
        setRatingsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching ratings:', error);
      });
  };

  useEffect(() => {
    fetchRatings();
  }, []);

  const calculateAverageRating = (ratings) => {
    const ratingArray = Object.keys(ratings);
    let sumRating = 0;
    ratingArray.forEach((rating) => (sumRating += rating * ratings[rating]));
    const reviewTotal = Object.values(ratings).reduce(
      (accu, curr) => accu + parseInt(curr),
      0
    );
    return sumRating / reviewTotal;
  };

  if (!ratingsData) {
    return <div>Loading ratings...</div>;
  }

  const calculateRecommendPercentage = (recommendData) => {
    return parseInt(recommendData.true)/(parseInt(recommendData.false) + parseInt(recommendData.true));
  }

  const calculateProgress = (ratings) => {
    let ratingDistribute = {};
    const reviewTotal = Object.values(ratings).reduce(
      (accu, curr) => accu + parseInt(curr),
      0
    );
    ratingDistribute[1] = ratings[1]/reviewTotal;
    ratingDistribute[2] = ratings[2]/reviewTotal;
    ratingDistribute[3] = ratings[3]/reviewTotal;
    ratingDistribute[4] = ratings[4]/reviewTotal;
    ratingDistribute[5] = ratings[5]/reviewTotal;
    return ratingDistribute;
  }


  const filterReviewsByRating = (filters) => {
    if (filters.length === 0) {
      setReviews(unfilteredReviews);
    } else {
      const filteredReviews = unfilteredReviews.filter(review =>
        filters.includes(review.rating)
      );
      setReviews(filteredReviews);
    }
  };


  const toggleFilter = (rating) => {
    setActiveFilters(prevFilters => {
      let newFilters;
      if (prevFilters.includes(rating)) {
        newFilters = prevFilters.filter(item => item !== rating);
      } else {
        newFilters = [...prevFilters, rating];
      }
      filterReviewsByRating(newFilters);
      return newFilters;
    });
  };


  const clearAllFilters = () => {
    setActiveFilters([]);
    setReviews(unfilteredReviews);
  };

  const recommendPercentage = calculateRecommendPercentage(ratingsData.recommended).toFixed(1);
  const averageRating = calculateAverageRating(ratingsData.ratings).toFixed(1);
  const ratingDistribute = calculateProgress(ratingsData.ratings);

  return (
    <div>
      <div className="averageRating pb-5">
        <h2 className="text-xl" >RATINGS & REVIEWS</h2>
        <span className="text-5xl pt-5 pr-5">{averageRating}</span>
        <Star rating={averageRating} />
      </div>

      <div className="recommendSummary  text-s pb-5">
        <span>{recommendPercentage * 100}% of reviews recommend this product</span>
      </div>

      <div className="ratingDistribute pb-8">
        <div className="hover:bg-gray-200  hover:bg-opacity-20 transition duration-300 ease-in-out 5stars flex items-center mb-2 text-xs">
          <label onClick={() => {
          toggleFilter(5);
        }}>5 stars</label>
          <ReviewBar bgcolor="#27272A" progress={ratingDistribute[5]*100}  height={9} />
          <label>({ratingsData.ratings[5]} reviews)</label>
        </div>
        <div className="hover:bg-gray-200 hover:bg-opacity-20 transition duration-300 ease-in-out4stars flex items-center mb-2 text-xs">
          <label onClick={() => {
          toggleFilter(4);
        }}>4 stars</label>
          <ReviewBar bgcolor="#27272A" progress={ratingDistribute[4]*100}  height={9} />
          <label>({ratingsData.ratings[4]} reviews)</label>
        </div>
        <div className="hover:bg-gray-200 hover:bg-opacity-20 transition duration-300 ease-in-out 3stars flex items-center mb-2 text-xs">
          <label onClick={() => {
          toggleFilter(3);
        }}>3 stars</label>
          <ReviewBar bgcolor="#27272A" progress={ratingDistribute[3]*100}  height={9} />
          <label>({ratingsData.ratings[3]} reviews)</label>
        </div>
        <div className="hover:bg-gray-200 hover:bg-opacity-20 transition duration-300 ease-in-out 2stars flex items-center mb-2 text-xs">
          <label onClick={() => {
          toggleFilter(2);
        }}>2 stars</label>
          <ReviewBar bgcolor="#27272A" progress={ratingDistribute[2]*100}  height={9} />
          <label>({ratingsData.ratings[2]} reviews)</label>
        </div>
        <div className="hover:bg-gray-200 hover:bg-opacity-20 transition duration-300 ease-in-out 1stars flex items-center mb-1 text-xs">
          <label onClick={() => {
          toggleFilter(1);
        }}>1 stars</label>
          <ReviewBar bgcolor="#27272A" progress={ratingDistribute[1]*100}  height={9} />
          <label>({ratingsData.ratings[1]} reviews)</label>
        </div>
      </div>

      <div className="filterMessage pb-8 flex">
        {activeFilters.length > 0 && (
          <div className="flex flex-col">
            <div className="font-semibold text-sm mb-2">Filters:</div>
            <div className="flex flex-wrap gap-2">
              {activeFilters.map(filter => (
                <span className="removeFilter italic hover:text-white text-sm bg-gray-200 bg-opacity-20 pl-1 pr-1 flex items-center" onClick={() => toggleFilter(filter)} key={filter}>
                  {filter} stars <FaTimes className="ml-1" />
                </span>
              ))}
            </div>
            <div>
              <button className="mt-2 italic text-xs font-semibold hover:text-white bg-gray-200 bg-opacity-20 p-1" onClick={clearAllFilters}>
                Clear all filters
              </button>
            </div>

          </div>
        )}
      </div>


      <div className="characteristicBreakdown pb-15">
  {Object.entries(ratingsData.characteristics).map(([charName, charData]) => (
    <div className="characteristic items-center mb-1 text-xs" key={charData.id}>
      <label className="font-semibold">{charName}</label>
      <div className="flex flex-col items-center">
        <CharacterBar className="pr-6" progress={parseFloat(charData.value) * 20} height={5} />
        <div className="flex justify-between w-full">
          <div className="text-2xs ml-8">{characteristicsData.find(data => data.title === charName).meanings[0]}</div>
          <div className="text-2xs">{characteristicsData.find(data => data.title === charName).meanings[2]}</div>
          <div className="text-2xs mr-8">{characteristicsData.find(data => data.title === charName).meanings[4]}</div>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  )
};

export default RatingSummary;
