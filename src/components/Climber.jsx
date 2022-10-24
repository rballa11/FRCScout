import React from 'react';
import {Component } from 'react';

import "./Climber.css";

class Climber extends Component{
    render(){
        return(
            <div className='climber'>
                <button onClick = {() => this.props.transversal()} style = {{backgroundColor: this.props.transversalstyle}} className = "trans">Transversal</button>
                <button onClick = {() => this.props.high()} style = {{backgroundColor: this.props.highstyle}} className = "high">High</button>
                <button onClick = {() => this.props.mid()} style = {{backgroundColor: this.props.midstyle}} className = "mid">Mid</button>
                <button onClick = {() => this.props.low()} style = {{backgroundColor: this.props.lowstyle}} className = "low">Low</button>
                <div className = "climbertime">
                <button onClick = {() => this.props.climberdecrement()} className = "climbdec">Climber Time-</button>
                <span style ={{ fontSize : 30}} className  = "badge bg-primary m-2">{this.props.climbertime}</span>
                <button onClick = {() => this.props.climberincrement()} className = "climbinc">Climber Time+</button>
                </div>
            </div>
        );
    }
}
export default Climber;