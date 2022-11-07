import React from "react";
import {Component} from "react";
import Auto from "../components/Auto";
import Taxi from "../components/Taxi";
import Information from "../components/Information";
import Teleop from "../components/Teleop";
import Climber from "../components/Climber";
import Submit from "../components/Submit";
import {db, app, submitReport} from "../firebase";



import "./Scout.css";
class Scout extends Component{
    state = {
        match: "",
        team: 0,
        autolowerhubshoot: 0,
        autohigherhubshoot: 0,
        automissed: 0,
        taxi: false,
        taxistyle: "#FF0000",
        alliance: false,
        alliancestyle: "#FF0000",
        teleophigher: 0,
        teleoplower: 0,
        teleopmissed: 0,
        low: false,
        lowstyle: "#FF0000",
        mid: false,
        midstyle: "#FF0000",
        high: false,
        highstyle: "#FF0000",
        transversal: true,
        transversalstyle: "#FF0000",
        climbertime: 0,

    } 
  
    render(){
        return(
            <div>
                <label className="matchnumber">
                Match Number<input type = "text" value= {this.state.match} onChange = {(e)=>this.matchChange(e)}/>
            </label>
            <label className = "teamnumber">
                Team Number<input type = "text" value = {this.state.team} onChange = {(e)=>this.teamChange(e)}/>
            </label>
            <Information alliancecolor = {this.state.alliancestyle} alliance = {this.alliancetoggle}/>
            <Taxi color = {this.state.taxistyle} colorfunc = {this.autotaxitoggle}/>
            <Auto autolowerhub = {this.state.autolowerhubshoot} autoupperhub = {this.state.autohigherhubshoot} 
            autolowerdecrement = {this.autolowerdecrement} autolowerincrement = {this.autolowerincrement} 
            autoupperdecrement = {this.autoupperdecrement} autoupperincrement = {this.autoupperincrement} 
            automissed = {this.state.automissed} automissedincrement = {this.automissedincrement} 
            automisseddecrement = {this.automisseddecrement}/>
            <Teleop teleophigher = {this.state.teleophigher} teleophigherincrement = {this.teleophigherincrement}
            teleophigherdecrement = {this.teleophigherdecrement} teleoplower = {this.state.teleoplower} 
            teleoplowerincrement = {this.teleoplowerincrement} teleoplowerdecrement = {this.teleoplowerdecrement}
            teleopmissed = {this.state.teleopmissed} teleopmissedincrement = {this.teleopmissedincrement}
            teleopmisseddecrement = {this.teleopmisseddecrement}/>
            <Climber low = {this.lowtoggle} lowstyle = {this.state.lowstyle} mid = {this.midtoggle} 
            midstyle = {this.state.midstyle} high = {this.hightoggle} highstyle = {this.state.highstyle}
            transversal = {this.transversaltoggle} transversalstyle = {this.state.transversalstyle}
            climberincrement = {this.climberincrement} climberdecrement = {this.climberdecrement} 
            climbertime = {this.state.climbertime}/>
           <input type="submit" value="Submit" className = "f" onClick = {this.submitReport}/>

            </div>
        );
    }
    submitReport = () => {
        submitReport(this.state);
        this.setState({match: "",
        team: 0,
        autolowerhubshoot: 0,
        autohigherhubshoot: 0,
        automissed: 0,
        taxi: false,
        taxistyle: "#FF0000",
        alliance: false,
        alliancestyle: "#FF0000",
        teleophigher: 0,
        teleoplower: 0,
        teleopmissed: 0,
        low: false,
        lowstyle: "#FF0000",
        mid: false,
        midstyle: "#FF0000",
        high: false,
        highstyle: "#FF0000",
        transversal: true,
        transversalstyle: "#FF0000",
        climbertime: 0
    });
    }
    matchChange = (event) => {
        this.setState({match: event.target.value});
        console.log(this.state.match);
    }
    teamChange = (event) => {
        this.setState({team: event.target.value});
        console.log(this.state.team);
    }
    autolowerdecrement = () => {
        this.setState({autolowerhubshoot: this.state.autolowerhubshoot-1});
        console.log(this.autholowerhubshoot);
    }
    autolowerincrement = () => {
        this.setState({autolowerhubshoot: this.state.autolowerhubshoot+1});
    }
    autoupperdecrement = () => {
        this.setState({autohigherhubshoot: this.state.autohigherhubshoot-1});
        
    }
    autoupperincrement = () => {
        this.setState({autohigherhubshoot: this.state.autohigherhubshoot+1});
    }
    automissedincrement = () => {
        console.log('a');
        this.setState({automissed: this.state.automissed+1});

    }
    teleophigherincrement = () => {
        this.setState({teleophigher: this.state.teleophigher+1});
    }
    teleophigherdecrement = () => {
        this.setState({teleophigher: this.state.teleophigher-1});
    }
    teleoplowerincrement = () => {
        this.setState({teleoplower: this.state.teleoplower+1});
    }
    teleoplowerdecrement = () => {
        this.setState({teleoplower: this.state.teleoplower-1});
    }
    teleopmissedincrement = () => {
        this.setState({teleopmissed: this.state.teleopmissed+1});
    }
    teleopmisseddecrement = () => {
        console.log("a");
        this.setState({teleopmissed: this.state.teleopmissed-1});
    }
    automisseddecrement = () => {
        
        this.setState({automissed: this.state.automissed-1});
        console.log(this.state.automissed);
    }
    climberdecrement = () => {
        
        this.setState({climbertime: this.state.climbertime-5});
        
    }
    climberincrement = () => {
        
        this.setState({climbertime: this.state.climbertime+5});
        
    }

    autotaxitoggle = () => {
        console.log(this.state.taxi);
        this.setState({taxi: !this.state.taxi});
        if(this.state.taxi){
            this.setState({taxistyle: "#008000"});
        }else{
            this.setState({taxistyle: "#FF0000"});
        }  
    }
    alliancetoggle = () => {
        console.log(this.state.alliance);
        this.setState({alliance: !this.state.alliance});
        if(this.state.alliance){
            this.setState({alliancestyle: "	#0000FF"});
        }else{
            this.setState({alliancestyle: "#FF0000"});
        }   
    }
    lowtoggle = () => {
        console.log(this.state.low);
        this.setState({low: !this.state.low});
        if(this.state.low){
            this.setState({lowstyle: "	#008000"});
        }else{
            this.setState({lowstyle: "#FF0000"});
        }    
    }
    midtoggle = () => {
        console.log(this.state.mid);
        this.setState({mid: !this.state.mid});
        if(this.state.mid){
            this.setState({midstyle: "	#008000"});
        }else{
            this.setState({midstyle: "#FF0000"});
        }
    }
    hightoggle = () => {
        console.log(this.state.high);
        this.setState({high: !this.state.high});
        if(this.state.high){
            this.setState({highstyle: "	#008000"});
        }else{
            this.setState({highstyle: "#FF0000"});
        }
    }
    transversaltoggle = () => {
        console.log(this.state.transversal);
        this.setState({transversal: !this.state.transversal});
        if(this.state.transversal){
            this.setState({transversalstyle: "	#008000"});
        }else{
            this.setState({transversalstyle: "#FF0000"});
        }
        
    }
}
export default Scout;