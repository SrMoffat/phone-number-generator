import React, { Component } from 'react';

import './App.css';

import { renderSideNav } from './utils/componentBuilder';
import Dashboard from './components/dashboard';

export default class App extends Component {

  render() {

    return (
      <div className="App-header">
        {
          renderSideNav()
        }
        <Dashboard/>
  

          
      </div>
    );
  }
}
