import React from 'react';

import { renderNumbers } from '../../utils/componentBuilder';

const Table = (props) => {
    const { numbers } = props;

    return (
        <div className="table">
            <div className=" row column-label">
                <span className="id-label">Entry</span>
                <span className="number-label">Number</span>
            </div>
            {
                renderNumbers(numbers)                
            }
        </div>
    );
}

export default Table;
