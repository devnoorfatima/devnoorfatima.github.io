import React, { Component } from 'react';

class Toogle extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show: false
        };
    }
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
      }
    render() {  
        return (      
        <div className="toogle">
        <h1>Visibility Toogle</h1>
        <button onClick={this.ToggleClick}>
          { this.state.show ?  'Show details' : 'Hide details' }
        </button>
        { this.state.show ? <h2>These are the details...</h2> : '' }
        </div>
      );
    }
  }
  
  export default Toogle ;