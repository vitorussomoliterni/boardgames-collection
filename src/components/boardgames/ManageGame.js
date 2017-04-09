import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as boardgameActions from '../../actions/boardgameActions';
import BoardgameForm from './BoardgameForm';

class ManageGame extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            boardgame: Object.assign({}, this.props.boardgame),
            errors: {}
        };
    }    

    componentWillReceiveProps(nextProps) {
        if (this.props.boardgame.id !== nextProps.boardgame.id) {
            this.setState({boardgame: Object.assign({}, nextProps.boardgame)});
        }
    }

    render() {
        return (
            <BoardgameForm />
        );
    }
}

ManageGame.propTypes = {
    boardgame: PropTypes.object.isRqeuired,
    actions: PropTypes.object.isRequired
};

export default ManageGame;