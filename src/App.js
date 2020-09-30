import React, { Component } from 'react';
import './App.scss';
import NavigationBar from './components/NavigationBar/NavigationBar'
import EntryScreen from './components/EntryScreen/EntryScreen';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import CanvasBackground from './components/CanvasBackground/CanvasBackground';

class App extends Component {
	constructor(props) {
		super(props);

		// this.state = {
		// 	isDrawing: false,
		// 	pickedColor: null
		// }
	}

	render() {
		const browserWidth = window.innerWidth;
		return (
			<div className="container">
				{ browserWidth >= 1000
					? <CanvasBackground />
					: null
				}
				<NavigationBar />
				{/* <EntryScreen />
				<Projects />
				<AboutMe /> */}
			</div>
		)
	}
}

export default App;
