import React, { useState, useEffect } from 'react';
import ProductGrid from './components/ProductGrid/ProductGrid';


function App() {

  const API_ENDPOINT = 'https://api.punkapi.com/v2/beers';
  const [ beers, setBeers ] = useState();
  

  useEffect( () => {

    const getInitialData = async () => {
      const data = await fetch( API_ENDPOINT ).then( res => res.json() );
      setBeers(data);
    }
    
    getInitialData();
  }, []);


  return (
    <>
      <ProductGrid products={beers} />
    </>
  );
}

export default App;
