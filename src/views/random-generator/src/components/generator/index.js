import React from 'react';

import NumberInput from '../input';
import Button from '../button';

const Generator = () => {
    return (
        <div className="generator">
            <NumberInput type="number" label="Numbers to Generate"/>
            <Button text="Generate Numbers"/>
        </div>
    )
}

export default Generator;