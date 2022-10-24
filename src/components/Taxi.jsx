import React from 'react';
import { Component } from 'react';

import "./Taxi.css";

class Taxi extends Component{

    render(){
        return(
            <div className= 'taxi'> 
                <button onClick = {() => this.props.colorfunc()}  style={{backgroundColor: this.props.color}} className = "AutoTaxi" >
                    Auto Taxi
                </button>
            </div>

    )
    }
}
export default Taxi;