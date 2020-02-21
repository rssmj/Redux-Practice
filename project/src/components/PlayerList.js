// 1
import React from 'react';
import PlayerCard from './PlayerCard.js';
import { connect } from 'react-redux';

// 2
const PlayerList = props => {
	// 2.1
	return (
		<div>
			<h1>Hello from the PlayerList component!!</h1>
			<PlayerCard />
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

export default connect(mapStateToProps, {})(PlayerList);
