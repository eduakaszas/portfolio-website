import React from 'react';

import './AboutMe.scss';

function AboutMe() {
    return (
        <div className="about-me-section">
            <h3 className="about-me-title"> A little about me... </h3>
            <div className="about-me-text">
                <p className="about-me-first"> 
                    I'm a self-taught web developer based in the Netherlands, originally from Hungary.
                    I enjoy coming up with creative solutions through code just as much as changing the color of 
                    the same button for 3 hours straight. 
                </p>
                <p className="about-me-second"> 
                    In my free time you'll catch me getting lost in the city, eating Indian food and
                    watching crime documentaries.
                </p>
            </div>
        </div>
    )
}

export default AboutMe;
