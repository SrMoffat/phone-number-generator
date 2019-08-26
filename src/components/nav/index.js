import React from 'react';

import avatar from '../../assets/images/avatar.jpg';
import logout from '../../assets/images/logout.svg';

const SideNav = () => {
    return (
        <div className="side-pane">
            <span>
                <img 
                    src={avatar}
                    className="side-pane-avatar"
                    alt={avatar}
                    >
                </img>
            </span>
            <span className="logo">
            𝔫𝔲𝔪𝔟𝔢𝔯𝔰
            </span>
            <span>
                <img 
                    src={logout}
                    className="side-pane-logout"
                    alt={logout}
                    >
                </img>
            </span>
        </div>
    )
}

export default SideNav;