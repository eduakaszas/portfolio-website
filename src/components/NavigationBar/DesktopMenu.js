import React from 'react';

import './DesktopMenu.scss';

function DesktopMenu() {
    return (
        <nav className="navbar">
            <ul className="nav-item-list">
                <li className="desktop-menu-item"><a href="#"> Projects </a></li>
                <li className="desktop-menu-item"><a href="#"> About </a></li>
            </ul>
        </nav>
    )
}

export default DesktopMenu;
