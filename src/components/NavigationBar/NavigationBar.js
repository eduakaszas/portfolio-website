import React from 'react';
import './NavigationBar.scss';

function NavigationBar() {
    return (
        <div className="nav-container">
            <h3 className="website-logo"> Cool Logo </h3>

            <input type="checkbox" id="nav-toggle" className="nav-toggle" />
            <nav>
                <ul>
                    <li><a href="#"> Projects </a></li>
                    <li><a href="#"> About </a></li>
                </ul>
            </nav>
            {/* <label for="nav-toggle" class="nav-toggle-label">
                <span></span>
            </label> */}
        </div>
    )
}

export default NavigationBar;