import React, { useState, useEffect } from 'react';

const ChangeLight = () => {
  const [color, setColor] = useState('red');
  
  useEffect(() => {
    const changeLight = setInterval(() => {
      setColor((prevColor) => {
        if (prevColor === 'red') return 'green';
        if (prevColor === 'green') return 'yellow';
        if (prevColor === 'yellow') return 'red';
      });
    }, 3000);

    return () => {
      clearInterval(changeLight);
    };
  }, []);
};
export default ChangeLight
