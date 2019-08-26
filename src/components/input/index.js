import React from 'react';

import Button from '../../components/button';

const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
}

const Input = (props) => {
    const { type, label, min, max } = props;
    return (
        <form className="generate-number-form" onSubmit={handleSubmit}>
            <label htmlFor={label}>{label}</label>
            <input type={type} min={min} max={max} required></input>
            <Button text="Generate Numbers"/>
        </form>
    )
}

export default Input;