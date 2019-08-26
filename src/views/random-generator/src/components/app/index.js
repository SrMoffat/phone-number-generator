import React from 'react';

import './styles/App.css';

import numbers from '../../assets/images/numbers.svg';
import min from '../../assets/images/min.svg';
import max from '../../assets/images/max.svg';

import Nav from '../nav';
import Dashboard from '../dashboard';

const cards = [
    {
        icon: numbers,
        header: 'Total Numbers',
        text: '10, 000'
    },
    {
        icon: min,
        header: 'Min Number',
        text: '0156789876'
    },
    {
        icon: max,
        header: 'Max Number',
        text: '0987654567'
    }
]

const dropdownOptions = [
   'Ascending',
   'Descending'
]

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Dashboard cards={cards} options={dropdownOptions} />
      </header>
    </div>
  );
}

export default App;
