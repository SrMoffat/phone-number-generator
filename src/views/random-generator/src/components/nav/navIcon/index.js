
import React from 'react';

const SideNavIcon = (props) => {
    const { icon, iconFile } = props;
    return (
        <span className="side-pane-icons">
            <img 
                className={`side-pane-${icon}`}
                src={iconFile} 
                alt={icon}               
                >
            </img>
        </span>
    )
}

export default SideNavIcon;