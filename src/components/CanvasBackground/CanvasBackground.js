import React, { Component } from 'react';
import './CanvasBackground.scss';

class CanvasBackground extends Component {
	constructor(props) {
		super(props);
		this.canvasRef = React.createRef();
        this.contextRef = React.createRef();
        
        this.state = {
			isDrawing: false,
			pickedColor: null
		}
    }
    
    componentDidMount() {
        const canvas = this.canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${ window.innerWidth }px`;
        canvas.style.height = `${ window.innerHeight }px`;

        const context = canvas.getContext("2d");
        context.scale(2,2);
        context.lineCap = "round";
        context.strokeStyle = "black";
        context.lineWidth = 5;
        this.contextRef.current = context;
    }

    startDrawing = ({nativeEvent}) => {
        console.log("fuck u")
        const { offsetX, offsetY } = nativeEvent;
        const currentContextRef = this.contextRef.current;

        currentContextRef.beginPath();
        currentContextRef.moveTo(offsetX, offsetY)
        
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

    render() {
        return (
            <canvas 
                onMouseDown={ this.startDrawing }
                onMouseUp={ this.finishDrawing }
                onMouseMove={ this.draw }
                ref={ this.canvasRef }
            />
        )
    }
}

export default CanvasBackground;
