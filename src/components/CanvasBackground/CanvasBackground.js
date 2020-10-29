import React, { Component } from 'react';
import PaintPots from '../PaintPots/PaintPots.js';

import './CanvasBackground.scss';

class CanvasBackground extends Component {
	constructor(props) {
		super(props);
		this.canvasRef = React.createRef();
        this.contextRef = React.createRef();
        
        this.state = {
            isDrawing: false
		}
    }
    
    componentDidMount() {
        const canvas = this.canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = document.body.scrollHeight;
        // canvas.style.width = `${ window.innerWidth }px`;
        canvas.style.height = `${ document.body.scrollHeight }px`;

        const context = canvas.getContext("2d");
        context.scale(2,1);
        context.lineCap = "round";
        context.lineJoin = "round";
        context.strokeStyle = "black";
        context.lineWidth = 4;
        this.contextRef.current = context;
    }

    startDrawing = ({nativeEvent}) => {
        const { pickedColor } = this.props;
        const { offsetX, offsetY } = nativeEvent;
        const currentContextRef = this.contextRef.current;

        currentContextRef.beginPath();
        currentContextRef.moveTo(offsetX, offsetY);
        currentContextRef.strokeStyle = pickedColor;
        
        this.setState({
            isDrawing: true
        })
	}

	finishDrawing = () => {
        const currentContextRef = this.contextRef.current;
        currentContextRef.closePath();

        this.setState({
            isDrawing: false
        })
	}

	draw = ({nativeEvent}) => {
        const { isDrawing } = this.state;
        if( !isDrawing ) return;

        const { offsetX, offsetY } = nativeEvent;
        const currentContextRef = this.contextRef.current;

        currentContextRef.lineTo(offsetX, offsetY);
        currentContextRef.stroke();
    }

    // clearCanvas = () => {
    //     const currentContextRef = this.contextRef.current;
    //     const canvas = this.canvasRef.current;
    //     canvas.width = window.innerWidth * 2;
    //     canvas.height = window.innerHeight * 2;

    //     currentContextRef.clearRect(0, 0, currentContextRef.canvas.width, currentContextRef.canvas.height);
    // }

    render() {
        const { selectColor } = this.props;

        return (
            <div>
                <canvas 
                    onMouseDown={ this.startDrawing }
                    onMouseUp={ this.finishDrawing }
                    onMouseMove={ this.draw }
                    ref={ this.canvasRef }
                />
                <PaintPots selectColor={ selectColor }
                            // clearCanvas={ this.clearCanvas }
                />
            </div>
        )
    }
}

export default CanvasBackground;
