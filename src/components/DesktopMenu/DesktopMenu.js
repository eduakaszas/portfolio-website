import React from 'react';
import CanvasModeSwitch from '../CanvasModeSwitch/CanvasModeSwitch.js';
import './DesktopMenu.scss';

function DesktopMenu(props) {
    return (
        <nav className="navbar">
            <ul className="nav-item-list">
                <li className="switch">
                    <CanvasModeSwitch 
                        switchDrawMode={ props.switchDrawMode } 
                        isDrawModeOn={ props.isDrawModeOn }
                    />
                </li>
                <li className="draw-mode"> Draw mode </li>
                <li><a href="#projects-list" className="desktop-menu-item"> Projects </a></li>
                <li><a href="#about-me-section" className="desktop-menu-item"> About </a></li>
            </ul>
        </nav>
    )
}

export default DesktopMenu;
