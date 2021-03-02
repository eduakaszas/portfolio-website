import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import IntroSection from './components/IntroSection/IntroSection';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import CanvasBackground from './components/CanvasBackground/CanvasBackground';
import TagManager from 'react-gtm-module'
import './App.scss';


const tagManagerArgs = {
    gtmId: 'GTM-P2N6895'
};

TagManager.initialize(tagManagerArgs);

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
			<div>
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
				<Projects />
				<AboutMe />
			</div>
		)
	}
}

export default App;
