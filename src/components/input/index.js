import React from 'react';

import Button from '../../components/button';

const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
}

const Input = (props) => {
    const { type, label, min, max, onChange, disabled, onClick } = props;
    return (
        <form className="generate-number-form" onSubmit={handleSubmit}>
            <label htmlFor={label}>{label}</label>
            <input type={type} min={min} max={max} required onChange={onChange}></input>
            <Button text="Generate Numbers" disabled={disabled} onClick={onClick}/>
        </form>
    )
}

export default Input;