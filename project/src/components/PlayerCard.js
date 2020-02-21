// 1
import React from 'react';

// 2
const PlayerCard = props => {
	// 2.1
	return (
		<div>
			<div className='card'>
				{/* <h1>Hello from the PlayerCard component!!</h1> */}
				<h2>{props.player.name}</h2>
				<h3>{props.player.rank}</h3>
				<h3>{props.player.nickname}</h3>
			</div>
		</div>
	);
};

// 3
export default PlayerCard;
