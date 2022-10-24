import React from "react";
import { Component } from "react";

import "./Information.css"

class Information extends Component{
    render(){
        return(
            <div className = "text">
            <label className="matchnumber">
                Match Number<input type = "text" />
            </label>
            <label className = "teamnumber">
                Team Number<input type = "text" />
            </label>
            <button onClick = {() => this.props.alliance()}  style={{backgroundColor: this.props.alliancecolor}} className = "alliance">Alliance</button>
            </div>
        );
    }
}
export default Information;