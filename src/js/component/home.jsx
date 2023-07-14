import React from 'react';
import TrafficLight from './traffic_light.jsx';
import ChangeLight from './lightInterval.jsx';

const Home = () => {
  const color = ChangeLight('red');

  const handleClick = (selectedColor) => {
    selectedColor=activeColor
  };

  return (
    <div>
      <TrafficLight activeColor={color} handleClick={handleClick} />
    </div>
  );
};

export default Home;


