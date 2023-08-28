import React, {useState, useEffect} from 'react';

const Characteristics = ({characteristicsRatings, setCharacteristicsRatings, characteristicsKeys}) => {

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

const handleCharacteristicRatingChange = (index, value) => {
  const updatedRatings = [...characteristicsRatings];
  updatedRatings[index] = value;
  setCharacteristicsRatings(updatedRatings);
};

// useEffect(()=> {
//   console.log(characteristicsRatings);
// }, [characteristicsRatings])


  return (
    <div className="characteristics">
      <h2 className="font-bold text-sm mb-2">Characteristics</h2>
      <div className="flex flex-col space-y-4">
        {characteristicsData
          .filter(characteristic => characteristicsKeys.includes(characteristic.title))
          .map((characteristic, index) => (
            <div key={index} className="flex flex-col items-start text-xs">
              <div className="flex items-center">
                <label className="font-semibold text-xs mr-2">
                  {characteristic.title}
                </label>
              </div>
              <div className="flex items-center space-x-4">
                {Array.from({ length: 5 }, (_, rating) => rating + 1).map(
                  (rating) => (
                    <label
                      key={rating}
                      className={`flex items-center cursor-pointer ${
                        characteristicsRatings[index] === rating
                          ? 'text-black font-semibold'
                          : 'text-gray-600'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`characteristic_${index}`}
                        value={rating}
                        onChange={() =>
                          handleCharacteristicRatingChange(index, rating)
                        }
                        className="mr-1 radio-input text-black cursor-pointer transition-colors duration-300 ease-in-out focus:ring-2 focus:ring-black focus:ring-opacity-50"
                      />
                      {characteristic.meanings[rating - 1]}
                    </label>
                  )
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};



export default Characteristics;