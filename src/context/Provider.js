import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [red, setRed] = useState(false);
  const [blue, setBlue] = useState(false);
  const [yellow, setYellow] = useState(false);

  const moveCar = (car, side) => {
    if (car === 'red') setRed(side)
    if (car === 'blue') setBlue(side)
    if (car === 'yellow') setYellow(side)
  };

  const context = {
    red,
    blue,
    yellow,
    moveCar,
  };
  
  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

export default Provider;
