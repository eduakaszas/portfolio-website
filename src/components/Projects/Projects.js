import React from 'react';
import moodJournalImage from '../images/mood_journal.png';
import portfolioImage from '../images/portfolio.png';
// import moodJournalImage from '../images/moodjournal_take2.svg';
// import portfolioImage from '../images/portfolio_take2.svg';
import './Projects.scss';

function Projects() {
    return (
        <ul className="projects-list">
            <li className="project">
                <img className="image mood-img"></img>
                <div className="text mood-text">
                    <h3> Mood Journal </h3>
                    <p> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <div className="links">
                        <a href="#"> Github </a>
                        <a href="#"> Demo </a>
                    </div>
                </div>
            </li>
            <li className="project sudoku">
                <img className="image sudoku-img"></img>
                <div className="text sudoku-text">
                    <h3> Sudoku game </h3>
                    <p> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <div className="links">
                        <a href="#"> Github </a>
                        <a href="#"> Demo </a>
                    </div>
                </div>
            </li>
            <li className="project">
                <img className="image site-img"></img>
                <div className="text site-text">
                    <h3> This website </h3>
                    <p> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <div className="links">
                        <a href="#"> Github </a>
                        {/* <a href="#"> Demo </a> */}
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default Projects;
