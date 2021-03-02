import React from 'react';
// import moodJournalImage from '../images/mood_journal.png';
// import portfolioImage from '../images/portfolio.png';
// import moodJournalImage from '../images/moodjournal_take2.svg';
// import portfolioImage from '../images/portfolio_take2.svg';
import './Projects.scss';

class Projects extends React.Component {

    showForm = e => {
        window.usabilla_live("click");
    }

    render() {
        return (
            <ul className="projects-list" id="projects-list">
                <li className="project">
                    <div className="image mood-img"></div>
                    <div className="text mood-text">
                        <h3> Mood Journal </h3>
                        <p> 
                            An app to keep track of your mood and feelings on a daily basis.
                        </p>
                        <div className="links">
                            <a href="https://github.com/eduakaszas/mood-journal" rel="noopener noreferrer" target="_blank"> 
                                Github 
                            </a>
                            <a href="https://moodjournal.netlify.app/" rel="noopener noreferrer" target="_blank"> Demo </a>
                        </div>
                    </div>
                </li>
                <li className="project themes">
                    <div className="image themes-img" alt="themes-img"></div>
                    <div className="text themes-text">
                        <h3> Custom themes at GetFeedback </h3>
                        <p> 
                            I've created numerous custom themes for our clients using SCSS & LESS.
                        </p>
                        <div className="links">
                            <a onClick={ this.showForm } href="/#"> Form </a>
                            <a href="http://survey.usabilla.com/live/s/603e9c3d4ca5623d5b1ffe80" rel="noopener noreferrer" target="_blank"> Campaign </a>
                        </div>
                    </div>
                </li>
                {/* <li className="project sudoku">
                    <img className="image sudoku-img" alt="sudoku-img"></img>
                    <div className="text sudoku-text">
                        <h3> Sudoku game </h3>
                        <p> 
                            In progress...
                        </p>
                        <div className="links">
                            <a href="/#"> Github </a>
                            <a href="/#"> Demo </a>
                        </div>
                    </div>
                </li> */}
            </ul>
        )
    }
}

export default Projects;
