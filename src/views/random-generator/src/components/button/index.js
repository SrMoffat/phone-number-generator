import React from 'react';

const Button = (props) => {
    const { text } = props;
    return (
        <button className="generate-button">{text}</button>
    );
}

export default Button;