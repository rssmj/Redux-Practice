// 1
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postPlayer } from '../actions';

// 2
const PlayerForm = props => {
	// 2.1

		const [player, setPlayer] = useState({
			name: '',
			rank: '',
			nickname: ''
		});

		const inputHandler = e => {
			setPlayer({ [e.target.name]: e.target.value });
		};

		const submitHandler = e => {
			e.preventDefault();
			props.postPlayer(player);
		};
		return (
			<div>
				<form id='playerForm'>
					<label htmlFor='name'>Name</label>
					<input
						className='input'
						type='text'
						name='name'
						label='name'
						placeholder='Human Person'
						value={props.name}
						onChange={inputHandler}
					/>
					<label htmlFor='rank'>Rank</label>
					<input
						className='input'
						type='text'
						name='rank'
						label='rank'
						placeholder='Human Rank'
						value={props.rank}
						onChange={inputHandler}
					/>
					<label htmlFor='nickname'>Nickname</label>
					<input
						className='input'
						type='text'
						name='nickname'
						label='nickname'
						placeholder='Human Nickname'
						value={props.nickname}
						onChange={inputHandler}
					/>
					<button onClick={submitHandler} className='btn'>
						Add Players
					</button>
				</form>
				<h1>Hello from the PlayerForm component!!</h1>
			</div>
		);
	};

const mapStateToProps = state => {
	return {
		players: state.players,
		errors: state.errors
	};
};

// 3
export default connect(mapStateToProps, { postPlayer })(PlayerForm);
