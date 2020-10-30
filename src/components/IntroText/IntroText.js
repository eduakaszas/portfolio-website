import React from 'react';
import './IntroText.scss';

function IntroText() {
    return (
        <div className="intro-text">
            <h1> 
                Hello there! 
                I'm Édua and I'm passionate about creating stuff for 
                the web.
            </h1>
            <h3>
                You can find me on&nbsp; 
                <span href="https://github.com/eduakaszas" target="_blank"> 
                    Github
                </span> 
                &nbsp;and&nbsp;
                <span href="https://www.linkedin.com/in/eduakaszas/" target="_blank">
                    LinkedIn
                </span>
                &nbsp;or&nbsp; 
                <span href="mailto:edua.kaszas@gmail.com" target="_blank">
                    send me a message.
                </span>
            </h3>
        </div>
    )
};

export default IntroText;
