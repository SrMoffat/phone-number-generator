import React from 'react';

import Card from '../card';
import Dropdown from '../dropdown';
import Generator from '../generator';
import Numbers from '../table';
import Paginator from '../paginator';

const Dashboard = (props) => {
    const { cards, options, numbers } = props;

    
    return (
        <div className="dashboard">
            <div className="stats">
                { cards.map(
                    (card, index) => (
                        <Card { ...card } key={index}/>)
                    ) 
                }
                <Dropdown options={options}/>            
            </div>
            <div className="operations">
                <Generator />
                <Numbers numbers={numbers}/> 
                <Paginator/>        
            </div>
        </div>
    )
}

export default Dashboard;
