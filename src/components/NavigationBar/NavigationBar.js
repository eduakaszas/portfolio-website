import React from 'react';
import DesktopMenu from '../DesktopMenu/DesktopMenu.js';
import MobileMenu from '../MobileMenu/MobileMenu.js';

import './NavigationBar.scss';

function NavigationBar() {
    const browserWidth = window.innerWidth;

    return (
        <div className="nav-container">
            { browserWidth <= 768 
                ? <MobileMenu />
                : <DesktopMenu />
            }
        </div>
    )
}

export default NavigationBar;
