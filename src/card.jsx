import React, { Component } from 'react';
import './card.css'
import MasterC from './MasterCard Logo - 640x398.png'
import Sim from './Nano_Sim.png'
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {number,serialnumber,text}=this.props
        return (       
        <div  className="Card">
        <h2 className="title">VISA CARD</h2>
        <img src={Sim} className="Sim"/>
        <div className="personal-info">
        <h3 className="Serial">{serialnumber}</h3>
        <div className="info">
        <h3 className="Name">{text}</h3>
        <h3 className="Name">{number.toString().substr(0,2)}/{number.toString().substr(2,4)}</h3>
        </div>
        </div>
        <img src={MasterC} className="MasterC"/>
        </div> );
    }
}
 
export default Card;