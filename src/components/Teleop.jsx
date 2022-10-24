import React from 'react';
import { Component } from 'react';

import "./Teleop.css"

class Teleop extends Component{
    render(){
        return(
            <div className = "teleop">
                <div className = "teloplower">
                <button onClick = {() => this.props.teleoplowerdecrement()} className = "decrement" >Teleop Lower -</button>
            <span style ={{ fontSize : 30}} className  = "badge bg-primary m-2">{this.props.teleoplower}</span>
            <button onClick = {() => this.props.teleoplowerincrement()} className = "increment">Teleop Lower +</button>
                </div>
                <div className = "teleophigher">
            <button onClick = {() => this.props.teleophigherdecrement()} className = "hdecrement">Teleop Upper -</button>
            <span style ={{ fontSize : 30}} className  = "badge bg-primary m-2">{this.props.teleophigher}</span>
            <button onClick = {() => this.props.teleophigherincrement()} className = "hincrement">Teleop Upper +</button>
            </div>
            
            <div className='teleopmissed'>
            <button onClick = {() => this.props.teleopmisseddecrement()} className = "mdecrement">Teleop Missed -</button>
            <span style ={{ fontSize : 30}} className  = "badge bg-primary m-2">{this.props.teleopmissed}</span>
            <button onClick = {() => this.props.teleopmissedincrement()} className = "mincrement">Teleop Missed +</button>
            </div>
            </div>

        );
    }
}
export default Teleop;