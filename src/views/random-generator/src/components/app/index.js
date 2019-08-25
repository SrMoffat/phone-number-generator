import React from 'react';
import logo from '../../assets/images/phone.svg';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Random Number Generator
        </p>
      </header>
    </div>
  );
}

export default App;
