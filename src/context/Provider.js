// src/context/Provider.js

// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider(props) {
  const [cars, setCarPosition] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const [signalColor, setSignalColor] = useState('red');

  const moveCar = function(car, side) {
    setCarPosition({
      ...cars,
      [car]: side,    
    });
  };

  const changeSignal = function (color) {
    setSignalColor(color)
  }

  
  const context = {
    cars,
    signalColor,
    moveCar,
    changeSignal,
  };

  return (
    <CarsContext.Provider value={context}>
      {props.children}
    </CarsContext.Provider>
  );
};

// Provider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Provider;
