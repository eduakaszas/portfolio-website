import React from 'react';
import './App.scss';
import NavigationBar from './components/NavigationBar/NavigationBar'
import EntryScreen from './components/EntryScreen/EntryScreen';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
	return (
		<div className="container">
			<NavigationBar />
			<EntryScreen />
			<Projects />
			<AboutMe />
		</div>
	);
};

export default App;
