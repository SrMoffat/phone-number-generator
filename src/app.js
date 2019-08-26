import React, { Component } from 'react';

import './App.css';

import min from '../src/assets/images/min.svg';
import max from '../src/assets/images/max.svg';
import numbers from '../src/assets/images/numbers.svg';

import Nav from '../src/components/nav';
import Dashboard from '../src/components/dashboard';

import phoneNumberGenerator from './utils/randomNumberGenerator';

class App extends Component {
  state = {
    amount: null,
    numbers: [],
    error: null,
    asc: false
  }

  cards = [
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

  dropdownOptions = [
    'Ascending',
    'Descending'
  ]

  componentDidMount() {
    const numbers = JSON.parse(localStorage.getItem('numbers'));
    /* istanbul ignore next */
    if(numbers && numbers.length > 0) {
    /* istanbul ignore next */
      this.setState({ numbers })
    }
  }

  /* istanbul ignore next */
  generateNumbers = (e) => {
    e.preventDefault()
    const { amount } = this.state;
    const numbers = phoneNumberGenerator(amount);
    this.setState({ numbers });
    localStorage.setItem('numbers', JSON.stringify(numbers));
    // successToast(`Numbers successfully generated`);
  }

  handleChange = e => {
    console.log(e.target.value)
    this.setState({ amount: e.target.value });
  }

  /* istanbul ignore next */
  handleSort = e => {
    e.preventDefault();
    const { asc, numbers } = this.state;

    this.setState({ asc: !asc });

    if(!asc) {
      this.setState({numbers: numbers.sort()})
    } else {
      this.setState({ numbers: numbers.reverse() })
    }
  }

  renderSidePane = () => (
        <div className="side-pane">
        <span>
            <img 
                src={''}
                className="side-pane-avatar"
                alt={''}
                >
            </img>
        </span>
        <span className="logo">
        𝔫𝔲𝔪𝔟𝔢𝔯𝔰
        </span>
        <span>
            <img 
                src={''}
                className="side-pane-logout"
                alt={''}
                >
            </img>
        </span>
      </div>
  )

  renderSideNavIcon = () => (
        <span className="side-pane-icons">
          <img 
              className={`side-pane-${''}`}
              src={''} 
              alt={''}               
              >
          </img>
        </span>
  )

  render() {
    const { numbers, error, amount } = this.state;
    const disable = amount > 10000 || amount < 1;

    return (
      <div className="App-header">
        <Nav />
        <Dashboard
          cards={this.cards}
          numbers={numbers}
          options={this.dropdownOptions}
          randomNumberChange={this.handleChange}
          randomNumberGenerate={this.generateNumbers}
        />
        {
              /* istanbul ignore next */
          disable && amount !== null && <div className="error">Amount must be between 1 - 10000</div>
        }
        { this.renderSidePane() }        
      </div>
    );
  }
}

export default App;
