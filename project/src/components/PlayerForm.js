// 1
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postPlayers } from '../actions';

// 2
const PlayerForm = props => {
	// 2.1

	const [player, setPlayer] = useState({
		name: '',
		rank: '',
		nickname: ''
	});

	const inputHandler = e => {
		setPlayer({ ...player, [e.target.name]: e.target.value });
	};

	const submitHandler = e => {
		e.preventDefault();
		props.postPlayers(player);
	};
	return (
		<div>
			<form className='playerForm'>
				<h1 className='formTitle'>Enter Player Data</h1>
				<label htmlFor='name'></label>
				<input
					className='input'
					type='text'
					name='name'
					label='name'
					placeholder='Name'
					value={props.name}
					onChange={inputHandler}
				/>
				<label htmlFor='rank'></label>
				<input
					className='input'
					type='text'
					name='rank'
					label='rank'
					placeholder='Rank'
					value={props.rank}
					onChange={inputHandler}
				/>
				<label htmlFor='nickname'></label>
				<input
					className='input'
					type='text'
					name='nickname'
					label='nickname'
					placeholder='Nickname'
					value={props.nickname}
					onChange={inputHandler}
				/>{' '}
				<button onClick={submitHandler} className='btn'>
					Add Players
				</button>
			</form>
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
export default connect(mapStateToProps, { postPlayers })(PlayerForm);
