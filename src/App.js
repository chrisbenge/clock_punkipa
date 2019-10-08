import React, { useState, useEffect } from 'react';

import styles from './App.scss';

import ProductGrid from './components/ProductGrid/ProductGrid';
import SortDropdown from './components/SortDropdown/SortDropdown';
import TextSearch from './components/TextSearch/TextSearch';


function App() {

  const API_ENDPOINT = 'https://api.punkapi.com/v2/beers';
  const [ beers, setBeers ] = useState([]);
  const [ keyword, setKeyword ] = useState('');

 async function getData( endpoint ) {
   const response = await fetch( endpoint );
   const json = await response.json();
   setBeers(json);
 }

  const sortData = event  => {
    const order = event.target.value;
    let reordedData = [...beers];

    if ( order === 'abv-asc' ) {
      sortAsecending( 'abv', reordedData );
    } else {
      sortAsecending( 'abv', reordedData ).reverse();
    }

    setBeers(reordedData);

  }

  const sortAsecending = ( key, data ) => data.sort( (a, b ) => (a[key] < b[key] ? 1 : -1));

  const keywordSearch = event => {
    const searchString = keyword.replace( / /g, '_');
    getData( `${API_ENDPOINT}?beer_name=${searchString}` );
    event.preventDefault();
  }

  useEffect( () => {
    getData( API_ENDPOINT );
  }, []);

  return (
    <div className={ styles.appWrapper }>
      <TextSearch handleSubmisson={keywordSearch} handleChange={setKeyword} />
      <SortDropdown handleChange={sortData} />
      <ProductGrid products={beers} />
    </div>
  );
}

export default App;
