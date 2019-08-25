import React from 'react';

const Dashboard = (props) => {
    const { children } = props;
    return (
        <div className="dashboard">
            {children}
        </div>
    )
}

export default Dashboard;