
import React, { Component } from 'react';
import User from './components/User'
import './App.css';
import Counter from './components/Counter';
import store from './store'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter store={store} />
        <User store = {store} />
      </div>
    );
  }
}  
export default App;