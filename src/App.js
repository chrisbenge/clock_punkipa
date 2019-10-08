import React, { useState, useEffect } from 'react';

import styles from './App.module.scss';

import ProductGrid from './components/ProductGrid/ProductGrid';
import SortDropdown from './components/SortDropdown/SortDropdown';
import TextSearch from './components/TextSearch/TextSearch';


function App() {

  const API_ENDPOINT = 'https://api.punkapi.com/v2/beers';
  const [ beers, setBeers ] = useState([]);
  const [ keyword, setKeyword ] = useState('');

 async function getData( endpoint = API_ENDPOINT) {
   try {

    const response = await fetch( endpoint );
    const json = await response.json();
    setBeers(json);

   } catch(err) {

     throw new Error(err);

   }  
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

  const sortAsecending = ( key , data ) => data.sort( (a, b ) => (a[key] < b[key] ? 1 : -1));

  const keywordSearch = event => {

    const searchString = keyword.replace( / /g, '_');
    const url = (searchString === '' ? API_ENDPOINT : `${API_ENDPOINT}?beer_name=${searchString}`);

    getData( url );
    event.preventDefault();
  }

  useEffect( () => {
    getData();
  }, []);

  return (
    
    <main className={ styles.appWrapper }>
      <TextSearch handleSubmisson={keywordSearch} handleChange={setKeyword} />
      <SortDropdown handleChange={sortData} />
      <ProductGrid products={beers} />
    </main>
  );
}

export default App;
