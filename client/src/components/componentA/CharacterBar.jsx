import React from 'react';

const CharacterBar = ({ progress, height }) => {

  const trianglePosition = `calc(${progress}% - 10px)`;

  const Parentdiv = {
    position: 'relative',
    height: height,
    width: '60%',
    backgroundColor: '#f0ece2',
    margin: 15
  };

  const Triangle = {
    position: 'absolute',
    top: 'calc(50% - 5px)',
    left: trianglePosition,
    width: 0,
    height: 0,
    borderTop: '14px solid black',
    borderRight: '7px solid transparent',
    borderLeft: '7px solid transparent',
    zIndex: 1,
  };

  return (
    <>
      <div style={Parentdiv}>
        <div style={Triangle}></div>
      </div>
    </>
  )
};

export default CharacterBar;