import React from 'react';

const Card = (props) => {
    const { icon, header, text } = props;
    return (
        <div className="card">
            <div className="">
                <img 
                    className={`card-${icon}`}
                    src={icon} 
                    alt={icon}               
                    >
                </img>
            </div>
            <div className="">
                <p className="card-header">
                    { header }
                </p>
            </div>
            <div className="">
                <p className="card-header">
                    { text }
                </p>
            </div>
        </div>
    )
}

export default Card;