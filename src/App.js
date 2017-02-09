import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // 1 Called once
  // BEFORE ANY OTHER METHOD
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('Constructor');
  }

  // Immediately before initial rendering
  componentWillMount() {
    console.log('Component Will Mount');
  }

  // Immediately before initial rendering
  componentDidMount() {
    console.log('Component Did Mount');
  }

  // When component receives new props
  componentWillReceiveProps(nextProps) {
    console.log('Component Will Receive Props', JSON.stringify(nextProps));
  }

  // Before rendering, after receiving new props or state
  shouldComponentUpdate(nextProps, nextState) {
    console.log(`Should component update: nextProps -> ${JSON.stringify(nextProps)} nextState -> ${JSON.stringify(nextState)}`);
    if (this.state.count % 2 !== 0) {
      console.log('Should Component Update', this.state.count);
      return true;
    }
    return false;
  }

  // Before rendering, after receiving new props or state and only if shouldComponentUpdate return true
  componentWillUpdate(nextProps, nextState) {
    console.log(`Component will update : nextProps -> ${JSON.stringify(nextProps)} nextState -> ${JSON.stringify(nextState)}`);
  }

  // After component's updates are flushed to DOM
  componentDidUpdate() {
    console.log('Component will update');
    console.log('count in componentDidUpdate', this.state.count);
  }

  // Immediately before removing component from DOM
  componentWillUnmount() {
    console.log('Component will update');
  }


  increment() {
    this.setState({
      count: this.state.count + 1
    });
    console.log('count', this.state.count);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <button onClick={this.increment.bind(this)}>{this.state.count}</button>
        </p>
      </div>
    );
  }
}

export default App;
