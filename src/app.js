import React, { useState } from 'react';

import './App.css';

import { renderSideNav, getCards, getSortType } from './utils/componentBuilder';
import Dashboard from './components/dashboard';

const App = () => {
  const cards = getCards();
  const sortTypes = getSortType();

  const [numbers, setNumbers] = useState();

    return (
      <div className="App-header">
        { renderSideNav() }
        <Dashboard 
          cards={cards}
          options={sortTypes}
        />
  

          
      </div>
    );
}

export default App;
