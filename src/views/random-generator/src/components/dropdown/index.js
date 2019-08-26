import React from 'react';

const Dropdown = (props) => {
    const { options } = props;
    return (
        <select className="custom-select">
        <option value="" selected disabled>Sort By</option>
            {
                options.map((option, index) => {
                    return (
                        <option value={option} key={index}>{option}</option>
                    );
                })
            }
        </select>
    )
}

export default Dropdown;