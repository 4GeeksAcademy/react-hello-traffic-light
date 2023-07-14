import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  const handleClick = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <div className="light-container">
      <div
        className={`light red ${color === 'red' ? 'active' : 'red'}`}
        onClick={() => handleClick('red')}
      />
      <div
        className={`light yellow ${color === 'yellow' ? 'active' : 'yellow'}`}
        onClick={() => handleClick('yellow')}
      />
      <div
        className={`light green ${color === 'green' ? 'active' : 'green'}`}
        onClick={() => handleClick('green')}
      />
    </div>
  );
};
export default TrafficLight