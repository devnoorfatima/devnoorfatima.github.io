import React from 'react';
// class Action extends Component {
//   render() {
//     return (      
//       <div className="Action">
//          <button
//          disabled = {!this.props.hasOptions}
//          onClick = {this.props.handlePick}
//          >
//          What should I do?
//          </button>
      
//       </div>
//     );
//   }
// }

// stateless functional Component:
const Action =(props) => {
      return (      
        <div className="Action">
           <button
           className="big_button"
           disabled = {!props.hasOptions}
           onClick = {props.handlePick}
           >
           What should I do?
           </button>
        
        </div>
      );
  }
  
  export default Action;