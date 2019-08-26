import React from 'react';

import NumberInput from '../input';

const Generator = (props) => {
    const { handleChange, handleClick } = props;
    return (
        <div className="generator">
            <NumberInput 
                type="number"
                label="Numbers to Generate"
                min='0'
                max='10000'
                onChange={handleChange}
                onClick={handleClick}
            />
        </div>
    )
}

export default Generator;