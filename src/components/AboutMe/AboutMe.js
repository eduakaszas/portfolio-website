import React from 'react';

import './AboutMe.scss';

function AboutMe() {
    return (
        <div className="about-me-section">
            <h3 className="about-me-title"> A little about me... </h3>
            <div className="about-me-text">
                <p className="about-me-first"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <p className="about-me-second"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. 
                </p>
            </div>
        </div>
    )
}

export default AboutMe;
