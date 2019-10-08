import React from 'react';
import PropTypes from 'prop-types';

const SortDropdown = ( { handleChange } ) => (
  <select onChange={ handleChange }>
    <option value="abv-desc">ABV Descending</option>
    <option value="abv-asc">ABV Ascending</option>
  </select>
);

SortDropdown.propTypes =  {
  handleChange: PropTypes.func.isRequired
};

export default SortDropdown;

