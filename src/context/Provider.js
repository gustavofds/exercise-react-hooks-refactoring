// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider(props) {
  const [cars, setCarPosition] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const moveCar = function(car, side) {
    setCarPosition({
      ...cars,
      [car]: side,    
    });
  };

  
  const context = {
    cars,
    moveCar,
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
