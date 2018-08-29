import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {    
    render() {
        return (
            <div>
                <h1>Hi i'm counter:</h1>
                <h2>{this.props.count}</h2>
                <input type='button' value='increase' onClick={this.props.onIncrementClick}/>
                <input type='button' value='decrement' onClick={this.props.onDecrementClick}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        count: state.mathReducer.count
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementClick: () => {
            const action = { type: 'INCREMENT' };
            dispatch(action);
        },
        onDecrementClick: () => {
            const action = { type: 'DECREMENT' };
            dispatch(action);
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);