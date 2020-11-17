import React from 'react';
import CarsContext from './context/CarsContext';

const TrafficSignal = () => {
  return (
    <CarsContext.Consumer>
      {({ color, changeSignal, renderSignal }) => (
        <div>
          <div className="button-container">
            <button onClick={() => changeSignal('red')} type="button">
              Red
            </button>
            <button onClick={() => changeSignal('yellow')} type="button">
              Yellow
            </button>
            <button onClick={() => changeSignal('green')} type="button">
              Green
            </button>
          </div>
          <img className="signal" src={renderSignal(color)} alt="" />
        </div>
      )}
    </CarsContext.Consumer>
  );
};

export default TrafficSignal;