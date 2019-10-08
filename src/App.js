import React, { useState, useEffect } from 'react';

function App() {

  const API_ENDPOINT = 'https://api.punkapi.com/v2/beers'

  const getData = async () => {
    const data = await fetch( API_ENDPOINT ).then( res => res.json() );
  }


  useEffect( () => {
    getData();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
