import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorDisplay.css';

// eslint-disable-next-line react/prop-types
function ColorDisplay({ color }) {
  return (
    <div className={styles.ColorDisplay} style={{ backgroundColor: color }}></div>
  );
}

ColorDisplay.propTypes = {
  color: PropTypes.string.isRequired
};

export default ColorDisplay;
