import React from 'react';
import './Projects.scss';

function Projects() {
    return (
        <ul className="projects-list">
            <li className="project image left"> Image </li>
            <li className="project text right">
                <h3> Mood Journal </h3>
                <p> An app to log your mood and activities and help find patterns. </p>
            </li>
            <li className="project image right"> Image </li>
            <li className="project text left">
                <h3> Sudoku game </h3>
                <p> Sudoku for all ages! </p>
            </li>
            <li className="project image left"> Image </li>
            <li className="project text right">
                <h3> This website </h3>
                <p> A personal website showcasing my projects and with a fun twist! </p>
            </li>
        </ul>
    )
}

export default Projects;
