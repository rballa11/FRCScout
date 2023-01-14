import React from 'react';
import { Component } from 'react';

import { fetchData, getData, hashmap, getAvailability } from '../firebase';
import Team from "./Team";
import NotFound from "../components/NotFound";

class Analytics extends Component{
    state = {
        team: "",
    }
    render() {
        return (
            <div>
                <label>
                Search Team Number<input type = "text"  onChange = {(e)=>this.teamChanges(e)}/>
                </label>
                <button onClick = {() => (this.taketeam ? <Team num = {this.state.team}/>   : alert("team not found") )} >Search</button>
            </div>
        );

    }
    //<Team num = {this.state.team}/>  <NotFound />
    teamChanges = (event) => {
        this.setState({team: event.target.value})
        
    }
    taketeam = () => {
//conditionally rendering is not working
//the conditional rendering is always going to the true statement to true
        console.log(getAvailability(this.state.team))
        if(getAvailability(this.state.team)){
            return false;
        }else{
            return false;
        }
    }
}

export default Analytics;