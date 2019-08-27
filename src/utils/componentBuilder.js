import React from 'react';

import SideNav from '../components/nav';

import numbers from '../assets/images/numbers.svg';
import min from '../assets/images/min.svg';
import max from '../assets/images/max.svg';
import noresults from '../assets/images/searching.svg';

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

export const renderSideNav = () => (<SideNav/>);
export const getCards = () => (cards);
export const getSortType = () => (dropdownOptions);
export const renderNumbers = (numbers) => {
    if(numbers.length > 0){
        return numbers.map((number, index) => (
            <div className="row" key={index} >
                    <div className="">{index + 1}</div>
                    <div className="">{number}</div>
            </div>
            ));
    } else {
        return (<div className="no-numbers-generated">
                    <img 
                        src={noresults}
                        className="no-number-icon"
                        alt={noresults}
                        >
                    </img>
                    <p className="no-number-text">𝖓𝖔 𝖓𝖚𝖒𝖇𝖊𝖗𝖘 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉</p>
                </div>
        )
    }
}


