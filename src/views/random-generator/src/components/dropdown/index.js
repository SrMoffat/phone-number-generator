import React from 'react';

const Dropdown = (props) => {
    const { options } = props;
    return (
        <select className="custom-select">
        <option value="" defaultChecked disabled>𝔰𝔬𝔯𝔱 𝔟𝔶</option>
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