import React from 'react';
import DesktopMenu from '../DesktopMenu/DesktopMenu.js';
import MobileMenu from '../MobileMenu/MobileMenu.js';

import './NavigationBar.scss';

function NavigationBar(props) {
    const browserWidth = window.innerWidth;

    return (
        <div className="nav-container">
            { browserWidth <= 768 
                ? <MobileMenu />
                : <DesktopMenu 
                        switchDrawMode={ props.switchDrawMode } 
                        isDrawModeOn={ props.isDrawModeOn }
                />
            }
        </div>
    )
}

export default NavigationBar;
