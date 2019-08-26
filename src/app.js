import React, { Component } from 'react';

import './App.css';

import { renderSideNav, getCards, getSortType } from './utils/componentBuilder';
import Dashboard from './components/dashboard';

export default class App extends Component {
  cards = getCards();
  sortTypes = getSortType();

  render() {
    console.log(this.cards);

    return (
      <div className="App-header">
        { renderSideNav() }
        <Dashboard 
          cards={this.cards}
          options={this.sortTypes}
        />
  

          
      </div>
    );
  }
}
