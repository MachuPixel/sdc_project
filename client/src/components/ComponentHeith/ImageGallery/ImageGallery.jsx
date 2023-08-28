import React, { useState, useEffect } from 'react';
import ImageViewer from './ImageViewer.jsx';
import ThumbnailList from './ThumbnailList.jsx';

const ImageGallery = ({ images, thumbnail }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex flex-col items-center px-6">
      <section className="w-full mb-4 px-20">
        <ImageViewer currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} images={images} />
      </section>
      <section className="w-full mt-4 mb-4 py-4 px-4">
        <ThumbnailList setCurrentIndex={setCurrentIndex} thumbnail={thumbnail} />
      </section>
    </div>
  );
};

export default ImageGallery;
