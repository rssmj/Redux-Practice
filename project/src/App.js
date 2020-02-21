import React from 'react';
import './App.css';
import PlayerList from './components/PlayerList';
import PlayerForm from './components/PlayerForm.js';

function App() {
	return (
		<div className='App'>
			<h1 className='titlePlayers'>Soccer Players</h1>
			<div className='image'>
				<PlayerForm />
				<PlayerList />
			</div>
		</div>
	);
}

export default App;
