import React from 'react';
import Option from "./option"
// class Options extends Component {
//   render() {
//     return (      
//       <div className="Options">
//       <button onClick ={this.props.handleDeleteAll}>Remove All</button>
//       {
//       this.props.options.map((option) =>
//       <Option key = {option} optionText = {option} />)
//       }
      
//       </div>
//     );
//   }
// }

// stateless functional Component:
const Options = (props) => {
      return (      
        <div className="Options">
        <div className="widget-header">
        <h3 className="widget--title">Your Options</h3>
        <button className="button--link" onClick ={props.handleDeleteAll}>Remove All</button>
        </div>
        {
        props.options.map((option, index) =>
        <Option
        handleDeleteOption= {props.handleDeleteOption} 
        key = {option} optionText = {option} 
        count = { index+1 }
         />)
        }
        
        </div>
      );
  }
  
  export default Options;