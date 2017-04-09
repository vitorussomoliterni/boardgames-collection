import React from 'react';
import BoardgamesList from './BoardgamesList';
import { Link } from 'react-router-dom';

class BoardgamesPage extends React.Component {
	render() {
		return (
			<div>
				<h1>Boardgames</h1>
				<BoardgamesList />
				<Link className="btn btn-primary" to="/boardgame/manage">Add New Game</Link>
			</div>
		);
	}
}

export default BoardgamesPage;