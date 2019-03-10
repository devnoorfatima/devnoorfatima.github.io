import React, { Component } from 'react';
import Header from "./header"
import Action from "./action"
import Options from "./options"  
import Input from "./submit"
import OptionModal from "./Option.modal"
import "normalize.css/normalize.css"
import './App.scss';

class App extends Component {
  constructor (props) {
    super(props);
   this.handleDeleteAll = this.handleDeleteAll.bind(this);
   this.handlePick = this.handlePick.bind(this);
   this.handleAddOption = this.handleAddOption.bind(this);
   this.handleDeleteOption = this.handleDeleteOption.bind(this);
   this.handleRemoveModal  = this.handleRemoveModal.bind(this);
    this.state = {
      options : [],
      selectedOption :undefined
    }
  }
  
  handleDeleteAll() {
 this.setState(() => ({options:[]}));
}
  componentDidMount() {
    const json = localStorage.getItem("options");
    const options = JSON.parse(json);
    if(options) {
      this.setState(() => ({options}));
    }
    
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }   
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
 
  handleDeleteOption(optionToRemove) {
    this.setState((prevState)=> ({
      options:prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  
  handlePick () {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
     const option = this.state.options[randomNum];
     this.setState(() => ({ 
      selectedOption : option
       }));
  }

  handleAddOption (option) {
   if(!option){
     return "Enter a valid option."
   }else if (this.state.options.indexOf(option) > -1) {
     return "This option already exists."
   }
   
    this.setState((prevState) => ({options : prevState.options.concat(option)}))
  }

  handleRemoveModal= () => {
    this.setState(() => ({ 
      selectedOption : undefined
       }));
  }
  
  render() {
    const subtitle = "Give your life in the hands of Computer";
    return (      
      <div className="App">
     <Header subtitle = {subtitle} />
      <div className="container" >
         <Action 
         hasOptions= {this.state.options.length > 0}
         handlePick = {this.handlePick} 
         />
          <div className="widget">
         <Options
          options={this.state.options}
          handleDeleteAll ={this.handleDeleteAll}
          handleDeleteOption ={this.handleDeleteOption}
          />
         <Input handleAddOption = {this.handleAddOption} />
         </div>
         </div>
      <OptionModal 
         selectedOption = {this.state.selectedOption}
         handleRemoveModal = {this.handleRemoveModal}
         />
      </div>
    );
  }
}

export default App;