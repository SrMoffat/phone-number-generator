import React from 'react';

import './App.css';

import { renderSideNav, getCards, getSortType } from './utils/componentBuilder';
import Dashboard from './components/dashboard';

const App = () => {
  const cards = getCards();
  const sortTypes = getSortType();

  const numbers = Array.from({length: 40}, () => Math.floor(Math.random() * 40));


    return (
      <div className="App-header">
        { renderSideNav() }
        <Dashboard 
          cards={cards}
          options={sortTypes}
          numbers={numbers}
        />
  

          
      </div>
    );
}

export default App;
