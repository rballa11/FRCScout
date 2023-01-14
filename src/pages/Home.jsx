import React from 'react';
import { Component } from 'react';


import "./Home.css";

class Home extends Component {
    state = {  } 
    render() { 
        return (
            
            <div className = "center">
                <a href = "./Scout" rel = "noopener noreferrer">Scout</a>
                <a href = "./Analytics" rel = "noopener noreferrer">Analytics</a>
            </div>
        );
    }
}
 
export default Home;