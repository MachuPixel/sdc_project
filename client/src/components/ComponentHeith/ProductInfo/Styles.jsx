import React, { useState, useEffect } from 'react';

const Styles = ({ styles, setImages, SetThumbnail, setSelectedStyle, setCheckoutItem }) => {


  const [selectedColor, setSelectedColor] = useState(null);


  useEffect(() => {
    if (styles.length > 0) {
      setSelectedColor(styles[0].name);
    }
  }, [styles]);



  const handleClick = (styleColor, style) => {
    const chosenStyle = style.photos.map(photo => photo.url);
    const chosenThumStyle = style.photos.map(photo => photo.thumbnail_url);
    setSelectedColor(styleColor);
    setImages(chosenStyle);
    SetThumbnail(chosenThumStyle);
    setSelectedStyle(styleColor);
    setCheckoutItem(chosenThumStyle);

  };

  return (
    <div>
      <div className='text-white text-lg font-medium mb-4 px-2'>Style: {selectedColor}</div>
      <div>
        {styles.map((style) => (
          <img
            key={style.style_id}
            src={style.photos[0].thumbnail_url}
            alt={style.name}
            className={`w-24 h-24 inline-block p-2 rounded-2xl cursor-pointer hover:scale-110 ease-in-out duration-300 ${
              selectedColor === style.name ? 'border-2 border-[#78716C]' : ''
            }`}
            onClick={() => handleClick(style.name, style)}
          />
        ))}
      </div>
    </div>
  );
};

export default Styles;
