import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import BoardgameList from './BoardgameList';
import * as boardgameActions from '../../actions/boardgameActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Boardgames extends React.Component {
    render() {
        const { boardgames } = this.props;
        return (
            <div>
                <h1>Boardgames</h1>
                <Link to="/game" className="btn btn-primary">Add A Game</Link>
                <BoardgameList boardgames={boardgames} />
            </div>
        );
    }
}

Boardgames.propTypes = {
    boardgames: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        boardgames: state.boardgames
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(boardgameActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Boardgames);