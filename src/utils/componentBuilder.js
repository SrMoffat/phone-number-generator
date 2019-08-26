import React from 'react';

import SideNav from '../components/nav';

import numbers from '../assets/images/numbers.svg';
import min from '../assets/images/min.svg';
import max from '../assets/images/max.svg';

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

