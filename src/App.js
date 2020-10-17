import React, { Component } from 'react';
import './App.scss';
import NavigationBar from './components/NavigationBar/NavigationBar';
import IntroSection from './components/IntroSection/IntroSection';
// import Projects from './components/Projects/Projects';
// import AboutMe from './components/AboutMe/AboutMe';
import CanvasBackground from './components/CanvasBackground/CanvasBackground';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pickedColor: null, 
			isDrawModeOn: false
		}
	}

	// select color when clicking on one of the paint pots
	selectColor = e => {
        const selectedColor = e.target.style.backgroundColor;
		console.log( selectedColor )
		
        this.setState({
            pickedColor: selectedColor
        })
	}
	
	// function to toggle the switch
	switchDrawMode = isDrawModeOn => {
        this.setState({ isDrawModeOn });
    }

	render() {
		const browserWidth = window.innerWidth;
		const { pickedColor, isDrawModeOn } = this.state;

		return (
			<div className="container">
				{/* Only show canvas when draw mode is on AND the width of browser is >+ 1000 */}
				{ browserWidth >= 1000 && isDrawModeOn
					? <CanvasBackground 
							pickedColor={ pickedColor }
							selectColor={ this.selectColor } 
					/>
					: null
				}
				<NavigationBar 
					switchDrawMode={ this.switchDrawMode } 
					isDrawModeOn={ isDrawModeOn }
				/>
				<IntroSection />
				{/* 
				<Projects />
				<AboutMe /> */}
			</div>
		)
	}
}

export default App;
