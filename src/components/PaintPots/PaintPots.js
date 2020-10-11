import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';

import './PaintPots.scss';

class PaintPots extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        const { selectColor, clearCanvas } = this.props;

        return (
            <nav className="paint-nav">
                <ul className="paint-pots">
                    <li style={{ backgroundColor: "#202225" }} 
                        onClick={ selectColor } 
                        className="paint-pot"
                    />
                    <li style={{ backgroundColor: "#F492AD" }} 
                        onClick={ selectColor } 
                        className="paint-pot"
                    />
                    <li style={{ backgroundColor: "#6095B9" }} 
                        onClick={ selectColor } 
                        className="paint-pot"
                    />
                    <li style={{ backgroundColor: "#FCD44B" }} 
                        onClick={ selectColor } 
                        className="paint-pot"
                    />
                    {/* <li>
                        <FontAwesomeIcon 
                            icon={ faEraser } 
                            className="paint-pot"
                            onClick={ clearCanvas }
                        />
                    </li> */}
                </ul>
            </nav>
        )
    }
}

export default PaintPots;