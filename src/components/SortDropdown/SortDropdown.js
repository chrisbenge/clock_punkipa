import React from 'react';
import PropTypes from 'prop-types';

import styles from './SortDropdown.module.scss';

const SortDropdown = ( { handleChange } ) => (
  <div className={styles.sortDropdown}>
    <p>Order your results:</p>
    <select onChange={ handleChange }>
      <option value="abv-desc">ABV Descending</option>
      <option value="abv-asc">ABV Ascending</option>
    </select>
  </div>
);

SortDropdown.propTypes =  {
  handleChange: PropTypes.func.isRequired
};

export default SortDropdown;

