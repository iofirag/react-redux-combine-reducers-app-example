import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeUser} from '../actions/userActions'

class User extends Component {
    render() {
        return (
            <div>
                <h1>User widget:</h1>
                connected as <i>{this.props.username}</i>
                <br/>
                <input type='string' onChange={this.props.onUserChange} />
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
        onUserChange: (e)=> {
            const action = changeUser(`${e.target.value} THE KING!`);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);