import React from 'react';

const TextSearch = ( {handleSubmisson, handleChange} ) => (
  <form onSubmit={ handleSubmisson }>
    <input type='text' onChange={e => handleChange(e.target.value)}/>
    <input type='submit' value='Submit'/>
  </form>
);

export default TextSearch;