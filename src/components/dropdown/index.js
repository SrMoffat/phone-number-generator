import React, { useState } from 'react';

const Dropdown = (props) => {
    const { options } = props;

    const [ascending, setAscending] = useState(false);

    const drpdwn = document.getElementById('sort-select');
   
    drpdwn && drpdwn.addEventListener('change', (e) => {
        const { target: { value } } = e;

        setAscending(!ascending);

        const asc = value === 'Ascending';

        if(asc){ setAscending(!ascending)}

        

        console.log('1', ascending)

    })

    // console.log('2', ascending)



    return (
        <select className="custom-select" id="sort-select">        
        <option value="" disabled>𝔰𝔬𝔯𝔱 𝔟𝔶</option>
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