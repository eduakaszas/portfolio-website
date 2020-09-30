import React from 'react';

import './DesktopMenu.scss';

function DesktopMenu() {
    return (
        <nav className="navbar">
            <ul className="nav-item-list">
                <li><a href="#" className="desktop-menu-item"> Projects </a></li>
                <li><a href="#" className="desktop-menu-item"> About </a></li>
            </ul>
        </nav>
    )
}

export default DesktopMenu;
