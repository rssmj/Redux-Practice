import React from 'react';
import './App.css';
import PlayerList from './components/PlayerCard'
import PlayerForm from './components/PlayerList.js';

function App() {
	return (
		<div className='center'>
			<h1>Soccer Players</h1>
			<PlayerForm />
			<PlayerList />
		</div>
	);
}

export default App;
