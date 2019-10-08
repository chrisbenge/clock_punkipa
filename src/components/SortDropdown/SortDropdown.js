import React from 'react';

const SortDropdown = ( { handleChange } ) => (
  <select onChange={ handleChange }>
    <option value="abv-desc">ABV Descending</option>
    <option value="abv-asc">ABV Ascending</option>
  </select>
);

export default SortDropdown;

