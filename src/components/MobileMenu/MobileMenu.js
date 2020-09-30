import React from 'react';
import { slide as Menu } from 'react-burger-menu';


import './MobileMenu.scss';

function MobileMenu() {
    return (
        <Menu>
            <a id="home-link" className="menu-item" href="/"> Projects </a>
            <a id="about-link" className="menu-item" href="/"> About </a>
        </Menu>
    )
}

export default MobileMenu;
