import React from "react";
import {Component} from "react";
import Auto from "../components/Auto";
import Taxi from "../components/Taxi";
import Information from "../components/Information";

class Scout extends Component{
    state = {
        autolowerhubshoot: 0,
        autohigherhubshoot: 0,
        automissed: 0,
        taxi: false,
        taxistyle: "#FF0000",
        alliance: false,
        alliancestyle: "#FF0000",

    } 
    render(){
        return(
            <div>
                <Information alliancecolor = {this.state.alliancestyle} alliance = {this.alliancetoggle}/>
             <Taxi color = {this.state.taxistyle} colorfunc = {this.autotaxitoggle}/>
            <Auto autolowerhub = {this.state.autolowerhubshoot} autoupperhub = {this.state.autohigherhubshoot} autolowerdecrement = {this.autolowerdecrement} autolowerincrement = {this.autolowerincrement} 
            autoupperdecrement = {this.autoupperdecrement} autoupperincrement = {this.autoupperincrement} automissed = {this.state.automissed}
            automissedincrement = {this.automissedincrement} automisseddecrement = {this.automisseddecrement}/>
            
            </div>
        );
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
    automisseddecrement = () => {
        
        this.setState({automissed: this.state.automissed-1});
        console.log(this.state.automissed);
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
}
export default Scout;