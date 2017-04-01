import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as boardgameActions from '../../actions/boardgameActions';

class ManageGame extends React.Component {
    render() {
        return (
            <h1>Add A New Game</h1>
        );
    }
}

export default ManageGame;