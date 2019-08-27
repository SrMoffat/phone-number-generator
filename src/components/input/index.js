import React, { useState } from 'react';

import Button from '../../components/button';


import randomNumberGenerator from '../../utils/randomNumberGenerator';


const Input = (props) => {
    const [generationCount, setGenerationCount] = useState(0);
    const [results, setResults] = useState([]);
    const [disableButton, setDisableButton] = useState(true);

    const handleSubmit = e => e.preventDefault(); 

    const onClick = e => {
        const numbers = randomNumberGenerator(generationCount)

        if(numbers){ setResults(numbers); }

        localStorage.setItem('numbers', JSON.stringify(numbers));    
    }

    const onChange = e => {
        const { target: { value } } = e;

        setGenerationCount(value);

        setDisableButton(false);
    }

    const { type, label, min, max } = props;
    return (
        <form className="generate-number-form" onSubmit={handleSubmit}>
            <label htmlFor={label}>{label}</label>
            <input type={type} min={min} max={max} required onChange={onChange}></input>
            <Button text="Generate Numbers" disabled={disableButton} onClick={onClick}/>
        </form>
    )
}

export default Input;