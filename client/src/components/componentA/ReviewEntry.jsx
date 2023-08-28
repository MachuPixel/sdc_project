import React, {useState} from 'react';
import Star from './Star.jsx';
import ImageModal from './ImageModal.jsx';
import Helpful from './Helpful.jsx';
import { AiOutlineCheck } from 'react-icons/ai';

const ReviewEntry = ({ review }) => {
  const dateObj = new Date(review.date);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = dateObj.toLocaleDateString('en-US', options);

  const [showFullReview, setShowFullReview] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [openImageModal, setOpenImageModal] = useState(false);

  const handleShowMore = () => {
    setShowFullReview(true);
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpenImageModal(true);
  };

  return (
    <div className="relative h-100 w-50 p-4 border-b-2 border-neutral-800/50 reviewTile" key={review.review_id}>
      <div className="absolute top-0 right-0 h-50 w-50 text-xs text-stone-300 pt-2.5 pr-2.5">
        {review.reviewer_name},{formattedDate}
      </div>
      <Star rating={review.rating} />

      <div className="reviewSummary font-semibold">{review.summary}</div>

      <div className={`reviewBody font-normal ${showFullReview ? 'expanded' : ''}`}>
        {showFullReview ? review.body : review.body.substring(0, 250)}
        {!showFullReview && review.body.length > 250 && (
          <span className="showMore  hover:text-stone-50 text-xs text-stone-300" onClick={handleShowMore}>Show more</span>
        )}
      </div>

      {review.photos && review.photos.length > 0 && (
        <div className="imageThumbnail w-1/5 flex">
          {review.photos.map((image, index) => (
            <img
            key ={image.id}
            src={image.url}
            onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      )}

      {openImageModal && (
        <ImageModal
        imageUrl={selectedImage.url}
        closeModal={() => setOpenImageModal(false)}
        />
      )}

      {review.recommend && <div className="recommendation flex text-sm font-semibold mt-2"> <AiOutlineCheck className="mr-2"/>I recommend this product</div>}

      <Helpful review={review} />

    </div>
  );
}

export default ReviewEntry;
