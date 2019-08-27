import React, { useState, useEffect } from 'react';

import './App.css';

import { renderSideNav, getCards, getSortType } from './utils/componentBuilder';


import Dashboard from './components/dashboard';

const App = () => {
  const cards = getCards();
  const sortTypes = getSortType();

  const [results, setResults] = useState([]);

  useEffect(() => {
    const numbers = JSON.parse(localStorage.getItem('numbers'));
    
    if(numbers && numbers.length > 0) { setResults(numbers); }
  }, []);

    return (
      <div className="App-header">
        { renderSideNav() }
        <Dashboard 
          cards={cards}
          options={sortTypes}
          numbers={results}
        />
  

          
      </div>
    );
}

export default App;
