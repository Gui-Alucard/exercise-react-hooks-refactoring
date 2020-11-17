import React, { useState } from 'react';
import CarsContext from './CarsContext';
import redSignal from '../images/redSignal.jpeg';
import yellowSignal from '../images/yellowSignal.jpeg';
import greenSignal from '../images/greenSignal.jpeg';

function Provider({ children }) {
  const [red, setRed] = useState(false);
  const [blue, setBlue] = useState(false);
  const [yellow, setYellow] = useState(false);
  const [color, setColor] = useState('red');

  function moveCar(car, side) {
    if (color === 'green') {
      if (car === 'red') setRed(side);
      if (car === 'blue') setBlue(side);
      if (car === 'yellow') setYellow(side);
    }
    return null;
  };

  function changeSignal(signalColor) {
    setColor(signalColor)
    // if (color === 'red' || color === 'yellow') {
    //   setRed(false);
    //   setBlue(false);
    //   setYellow(false);
    // } para isso acontecer no momento da mudança do sinal, necessita de um useEffect!
  };

  const renderSignal = (signalColor) => {
    if (signalColor === 'red') return redSignal;
    if (signalColor === 'yellow') return yellowSignal;
    if (signalColor === 'green') return greenSignal;
    return null;
  };

  const context = {
    red,
    blue,
    yellow,
    color,
    moveCar,
    changeSignal,
    renderSignal,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

export default Provider;
