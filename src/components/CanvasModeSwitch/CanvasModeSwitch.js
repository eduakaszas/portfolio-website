import React from 'react';
import Switch from "react-switch";

import './CanvasModeSwitch.scss';

class CanvasModeSwitch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isCanvasModeOn: false
        }
    }

    handleChange = isCanvasModeOn => {
        this.setState({ isCanvasModeOn });
    }

    render() {
        const { isCanvasModeOn } = this.state;

        return (
            <label>
                <Switch onChange={ this.handleChange } 
                        checked={ isCanvasModeOn } 
                        onColor="#86d3ff"
                        onHandleColor="#2693e6"
                        handleDiameter={30}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={20}
                        width={48}
                        className="react-switch"
                        id="material-switch"
                />
            </label>
        )
    }
}

export default CanvasModeSwitch
