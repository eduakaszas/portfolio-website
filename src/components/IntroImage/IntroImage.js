import React from 'react';
import illustration from '../images/illustration.svg';
import './IntroImage.scss';

function IntroImage() {
    return (
        <img 
            className="intro-image"
            src={ illustration }
            alt="illustration"
        >
        </img>
    )
}

export default IntroImage;
