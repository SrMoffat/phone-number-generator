import React from 'react';

const rows = [
    {
        entryId: '1',
        number: '0198764532'
    },
    {
        entryId: '2',
        number: '0598732532'
    },
    {
        entryId: '3',
        number: '0998762632'
    },
    {
        entryId: '3',
        number: '0998762632'
    },
    {
        entryId: '3',
        number: '0998762632'
    },
    {
        entryId: '3',
        number: '0998762632'
    },
    {
        entryId: '3',
        number: '0998762632'
    },
    {
        entryId: '3',
        number: '0998762632'
    },
    {
        entryId: '3',
        number: '0998762632'
    },
    {
        entryId: '3',
        number: '0998762632'
    },
    {
        entryId: '3',
        number: '0998762632'
    },
    {
        entryId: '3',
        number: '0998762632'
    },
    {
        entryId: '3',
        number: '0998762632'
    },
    {
        entryId: '3',
        number: '0998762632'
    },
    {
        entryId: '3',
        number: '0998762632'
    },
    {
        entryId: '3',
        number: '0998762632'
    },
    {
        entryId: '3',
        number: '0998762632'
    },
    {
        entryId: '3',
        number: '0998762632'
    },
    {
        entryId: '3',
        number: '0998762632'
    }
]

const Table = () => {
    return (
        <div className="table">
            <div className=" row column-label">
                <span className="id-label">Entry</span>
                <span className="number-label">Number</span>
            </div>
            {
                rows.map(({ entryId, number }, index) => (
                   <div className="row" key={index} >
                        <div className="">{entryId}</div>
                        <div className="">{number}</div>
                   </div>
                ))
            }
        </div>
    );
}

export default Table;
