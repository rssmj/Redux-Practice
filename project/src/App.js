import React from 'react';
import './App.css';
import PlayerList from './components/PlayerList';
import PlayerForm from './components/PlayerForm.js';

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
