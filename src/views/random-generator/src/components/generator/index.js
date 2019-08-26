import React from 'react';

import NumberInput from '../input';
import Button from '../button';

const Generator = () => {
    return (
        <div className="generator">
            <NumberInput 
                type="number"
                label="Numbers to Generate"
                min='0'
                max='10000'
            />
        </div>
    )
}

export default Generator;