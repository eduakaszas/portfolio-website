import React from 'react';
import './Projects.scss';

function Projects() {
    return (
        <ul className="projects-list">
            <li className="project">
                <div className="image mood-img"></div>
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
                <div className="image sudoku-img"></div>
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
                <div className="image site-img"></div>
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
