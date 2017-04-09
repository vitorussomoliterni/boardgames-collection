import React from 'react';
import BoardgamesList from './BoardgamesList';

class BoardgamesPage extends React.Component {
	render() {
		return (
			<div>
				<h1>Boardgames</h1>
				<BoardgamesList />
			</div>
		);
	}
}

export default BoardgamesPage;