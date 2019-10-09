import React, { useState, useEffect } from 'react';

/** Style Imports */
import styles from './App.module.scss';

/** Component Imports */
import Header from './components/Header/Header';
import ProductGrid from './components/ProductGrid/ProductGrid';
import SortDropdown from './components/SortDropdown/SortDropdown';
import TextSearch from './components/TextSearch/TextSearch';


function App() {

  const API_ENDPOINT = 'https://api.punkapi.com/v2/beers?per_page=80';
  const [ beers, setBeers ] = useState([]);
  const [ keyword, setKeyword ] = useState('');

  /**
   * Async function that takes a URL and resets the state
   */
  async function getData( endpoint = API_ENDPOINT) {
   try {

    const response = await fetch( endpoint );
    const json = await response.json();
    setBeers(json);

   } catch(err) {

     throw new Error(err);

   }  
  }

  /**
   * Function run when the sort dropdown is interacted with
   */
  const sortData = event  => {
    const order = event.target.value;
    let reordedData = [...beers];

    switch( order ) {
      case 'id-desc':
          sortAsecending( 'id', reordedData );
        break;
      case 'abv-asc':
        sortAsecending( 'abv', reordedData );
        break;
      case 'abv-desc':
        sortDesending( 'abv', reordedData );
        break;
      default:
        sortDesending( 'id', reordedData );
    }

    setBeers(reordedData);
  }

  /**
   * Sorting Functions for number inputs
   */
  const sortAsecending = ( key , data ) => data.sort( (a, b ) => (a[key] > b[key] ? 1 : -1));
  
  const sortDesending = ( key , data ) => data.sort( (a, b ) => (a[key] < b[key] ? 1 : -1));

  /**
   * Function run when search is submitted
   */
  const keywordSearch = event => {

    const searchString = keyword.replace( / /g, '_');
    const url = (searchString === '' ? API_ENDPOINT : `${API_ENDPOINT}&beer_name=${searchString}`);

    getData( url );
    event.preventDefault();
  }

  /**
   * Run to get initial state when app is mounted
   */
  useEffect( () => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <main className={ styles.appWrapper }>
        <div className={ styles.appSearchBar }>
          <TextSearch handleSubmisson={keywordSearch} handleChange={setKeyword} />
          <SortDropdown handleChange={sortData} />
        </div>
        
        <ProductGrid products={beers} />
      </main>
    </>
  );
}

export default App;
