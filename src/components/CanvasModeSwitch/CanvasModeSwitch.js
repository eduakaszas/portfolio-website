import React from 'react';
import Switch from "react-switch";

import './CanvasModeSwitch.scss';

class CanvasModeSwitch extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { isDrawModeOn, switchDrawMode } = this.props;

        return (
            <label>
                <Switch 
                    onChange={ switchDrawMode } 
                    checked={ isDrawModeOn } 
                    onColor="#dba2b8"
                    onHandleColor="#c96c90"
                    handleDiameter={ 30 }
                    uncheckedIcon={ false }
                    checkedIcon={ false }
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    height={ 20 }
                    width={ 48 }
                    className="react-switch"
                    id="material-switch"
                />
            </label>
        )
    }
}

export default CanvasModeSwitch;
