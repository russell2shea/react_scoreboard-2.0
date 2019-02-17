import React from 'react';

const Stats = (props) =>{

	const totalplayers = props.players.length;

	//itterate each player and sate
	const totalPoints = props.players.reduce((total, player) => {
		//call back that runs on each element in the array
		return total + player.score;
	}, 0 /*0 intial value of acumulator*/);

	return (
	<table className="stats">
		 <tbody>
		    <tr>
		      <td>Players:</td>
		      <td>{totalplayers}</td>
		    </tr>
		    <tr>
		      <td>Total Points:</td>
		      <td>{totalPoints}</td>
		    </tr>
		  </tbody>
		</table>
	);
}

export default Stats;