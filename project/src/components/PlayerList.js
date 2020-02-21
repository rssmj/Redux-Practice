// 1
import React, { useEffect } from 'react';
import PlayerCard from './PlayerCard.js';
import { connect } from 'react-redux';
import { fetchPlayers } from '../actions';

// 2
const PlayerList = props => {
	// 2.1
	console.log(props);

	useEffect(() => {
		props.fetchPlayers();
	}, []);
	return (
		<div>
			<h1 className='titleList'>Player List</h1>
			<div className='card-container'>
				{props.players.map(player => (
					<PlayerCard key={player.id} player={player} />
				))}
			</div>
		</div>
	);
};

// 3
const mapStateToProps = state => {
	return {
		players: state.players,
		isFetching: state.isFetching,
		errors: state.errors
	};
};

export default connect(mapStateToProps, { fetchPlayers })(PlayerList);
