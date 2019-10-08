import React from 'react';
import PropTypes from 'prop-types';

const TextSearch = ( {handleSubmisson, handleChange} ) => (
  <form onSubmit={ handleSubmisson }>
    <input type='text' onChange={e => handleChange(e.target.value)}/>
    <input type='submit' value='Submit'/>
  </form>
);

TextSearch.propTypes =  {
  handleChange: PropTypes.func.isRequired,
  handleSubmisson: PropTypes.func.isRequired,
};

export default TextSearch;