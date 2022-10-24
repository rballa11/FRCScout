import React from 'react';
import {Component } from 'react';

import "./Auto.css";

class Auto extends Component{

    render(){
        return(
            <div className= 'autolower'>
            
            <button onClick = {() => this.props.autolowerdecrement()} className = "decrement" >Auto Lower -</button>
            <span style ={{ fontSize : 30}} className  = "badge bg-primary m-2">{this.props.autolowerhub}</span>
            <button onClick = {() => this.props.autolowerincrement()} className = "increment">Auto Lower +</button>
                <div className = 'autoupper'>
            <button onClick = {() => this.props.autoupperdecrement()} className = "hdecrement">Auto Upper -</button>
            <span style ={{ fontSize : 30}} className  = "badge bg-primary m-2">{this.props.autoupperhub}</span>
            <button onClick = {() => this.props.autoupperincrement()} className = "hincrement">Auto Upper +</button>
            </div>
            <div className='automissed'>
            <button onClick = {() => this.props.automisseddecrement()} className = "mdecrement">Auto Missed -</button>
            <span style ={{ fontSize : 30}} className  = "badge bg-primary m-2">{this.props.automissed}</span>
            <button onClick = {() => this.props.automissedincrement()} className = "mincrement">Auto Missed +</button>
            </div>
                
                
            </div>
            
        )
        }
}
export default Auto;