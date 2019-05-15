import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorDisplay';

// eslint-disable-next-line react/prop-types
function ColorDisplay({ color }) {
  return (
    <div className={styles.ColorDisplay} style={{ backgroundColor: color }}></div>
  );
}

ColorDisplay.PropTypes = {
  color: PropTypes.string.isRequired
};

export default ColorDisplay;
