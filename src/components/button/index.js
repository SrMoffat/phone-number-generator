import React from 'react';

const Button = (props) => {
    const { text, disabled, onClick } = props;
    return (
        <button
            className="generate-button"
            disabled={disabled}
            onClick={onClick}
        > {text} 
        </button>
    );
}

export default Button;