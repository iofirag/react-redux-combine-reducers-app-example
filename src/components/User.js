import React, { Component } from 'react';
import {connect} from 'react-redux';

class User extends Component {
    render() {
        return (
            <div>
                connected as <i>{this.props.username}</i>
                <input type='button' value='switch user' onClick={this.props.onUserChange}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.userReducer.username
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onUserChange: ()=> {
            const action = { type: 'CHANGE_USER'}
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);