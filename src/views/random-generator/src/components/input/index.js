import React, { Fragment } from 'react';

const Input = (props) => {
    const { type, label } = props;
    return (
        <Fragment>
            <label htmlFor={label}>{label}</label>
            <input type={type}></input>
        </Fragment>
    )
}

export default Input;