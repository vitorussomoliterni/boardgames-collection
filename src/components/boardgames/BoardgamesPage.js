import React from 'react';
import { Link } from 'react-router-dom';
import BoardgamesList from './BoardgamesList';
import BoardgamesData from '../../data/boardgames';

class BoardgamesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardgames: BoardgamesData
    };
  }

	render() {
		return (
			<div>
				<h1>Boardgames</h1>
				<BoardgamesList boardgames={this.state.boardgames} />
				<Link className="btn btn-primary" to="/boardgame/manage">Add New Game</Link>
			</div>
		);
	}
}

export default BoardgamesPage;