import React from 'react';
import './IntroText.scss';

function IntroText() {
    return (
        <div  className="intro-text">
            <h2> 
                Hello there! <br/>
                I'm Édua and I like creating stuff for 
                the web.
            </h2>
            <h4>
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
            </h4>
        </div>
    )
};

export default IntroText;
