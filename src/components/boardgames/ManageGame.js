import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as boardgameActions from '../../actions/boardgameActions';
import BoardgameForm from './BoardgameForm';

class ManageGame extends React.Component {
    render() {
        return (
            <BoardgameForm />
        );
    }
}

export default ManageGame;