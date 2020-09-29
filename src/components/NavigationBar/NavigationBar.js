import React from 'react';
import { slide as MobileMenu } from 'react-burger-menu';
import DesktopMenu from './DesktopMenu.js';

import './NavigationBar.scss';

function NavigationBar() {
    const browserWidth = window.innerWidth;

    return (
        <div className="nav-container">
            { browserWidth <= 768 
                ?   <MobileMenu>
                        <a id="home-link" className="menu-item" href="/"> Projects </a>
                        <a id="about-link" className="menu-item" href="/"> About </a>
                    </MobileMenu>
                : <DesktopMenu />
            }
        </div>
    )
}

export default NavigationBar;
