import React, { Component } from 'react';
import Card from './card';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
    value1:0,
    value2:'Ex: Mohamed Askri',
    value3:1254
  
  };
  }
  handleSerialnumber=(event)=> {

    return this.setState({value1: event.target.value.substr(0,16)})
  
  }
  handletext=(event)=> {
    return this.setState({value2: event.target.value.substr(0,16)})
  }
  handlenumber=(event)=> {
    return this.setState({value3: event.target.value.substr(0,4)})
  }

  render() {
    return (
      <div className="General">    
<Card number={this.state.value3} text={this.state.value2} serialnumber={this.state.value1}/> 
<br/>
<h4>Please Enter your Serial Number</h4>
<input type="number" onChange={this.handleSerialnumber} value={this.state.value1}/>
<h4>Please Enter your Name</h4>
<input type="text" onChange={this.handletext} value={this.state.value2}/>
<h4>Please Enter the Valid Number</h4>
<input type="number" onChange={this.handlenumber} value={this.state.value3}/>
      </div>
    );
  }
}

export default App;
