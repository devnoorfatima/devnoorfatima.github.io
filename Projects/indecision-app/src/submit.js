import React, { Component } from 'react';


class Input extends Component {
  constructor(props) {
   super(props);
   this.handleAddOption = this.handleAddOption.bind(this);
   this.state = {
     error : undefined
   };
  }  
  handleAddOption (e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
      this.setState(() => ({error}));

      if(!error) {
        e.target.elements.option.value = "";
      }
    }
    render() {
      return (      
        <div className="Input">
        {this.state.error && <p className="widget--message">{this.state.error}</p>}
        <form className="add-option" onSubmit = {this.handleAddOption}>
        <input className="add-option--input" type ="text" name="option" />
         <button
          className="button"
          >
          Submit
          </button>
        </form>
        </div>
      );
    }
  }
  
  export default Input;