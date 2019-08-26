import React from 'react';

import './styles/App.css';

import numbers from '../../assets/images/numbers.svg';
import min from '../../assets/images/min.svg';
import max from '../../assets/images/max.svg';

import Nav from '../nav';
import Dahsboard from '../dashboard';
import Card from '../card';
import Dropdown from '../dropdown';

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
        <Dahsboard>
           {
               cards.map((card, index) => (<Card { ...card } key={index}/>))
           }
           <Dropdown options={dropdownOptions}/>
        </Dahsboard>
      </header>
    </div>
  );
}

export default App;
