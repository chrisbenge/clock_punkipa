import React from 'react';
import PropTypes from 'prop-types';

import styles from './TextSearch.module.scss';

const TextSearch = ( {handleSubmisson, handleChange} ) => (
  <form onSubmit={ handleSubmisson } className={styles.textSearch}>
    <input type='text' placeholder='Search by name' onChange={e => handleChange(e.target.value)} className={styles.textSearch__text}/>
    <input type='submit' value='Submit'/>
  </form>
);

TextSearch.propTypes =  {
  handleChange: PropTypes.func.isRequired,
  handleSubmisson: PropTypes.func.isRequired,
};

export default TextSearch;