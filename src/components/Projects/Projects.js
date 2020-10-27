import React from 'react';
import './Projects.scss';

function Projects() {
    return (
        <ul className="projects-list">
            <li className="project">
                <div className="image mood-img"></div>
                <div className="text mood-text">
                    <h3> Mood Journal </h3>
                    <p> An app to log your mood and activities and help find patterns. </p>
                </div>
            </li>
            <li className="project">
                <div className="image sudoku-img"></div>
                <div className="text sudoku-text">
                    <h3> Sudoku game </h3>
                    <p> Sudoku for all ages! </p>
                </div>
            </li>
            <li className="project">
                <div className="image site-img"></div>
                <div className="text site-text">
                    <h3> This website </h3>
                    <p> A personal website showcasing my projects and with a fun twist! </p>
                </div>
            </li>
        </ul>
    )
}

export default Projects;
