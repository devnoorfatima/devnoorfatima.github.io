import React, { Component } from 'react';
class Count extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    // change code below this line
  
    increment() {
      this.setState({
        count: this.state.count + 1
      });
    };
    
    decrement() {
      this.setState({
        count: this.state.count - 1
      });
    };
  
    reset() {
      this.setState({
        count: 0
      });
    };
  
    // change code above this line
    render() {
      return (
  
     <div>
      <h1>Current Count: {this.state.count}</h1>
      <button  onClick={(e) => this.increment(e)}>+1</button>
      <button  onClick={(e) => this.decrement(e)}>-1</button>
      <button  onClick={(e) => this.reset(e)}>Reset</button>
    </div>
      );
    }
  };
export default Count;