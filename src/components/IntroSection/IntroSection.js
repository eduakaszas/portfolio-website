import React from 'react';
import IntroText from '../IntroText/IntroText.js';
import IntroImage from '../IntroImage/IntroImage.js';

import './IntroSection.scss';

function IntroSection() {
    return (
        <div className="intro-section">
            <IntroText />
            <IntroImage />
        </div>
    )
}

export default IntroSection;
