
import React, { Component } from 'react';
import User from './components/User'
import './App.css';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
        <User/>
      </div>
    );
  }
}  
export default App;