import React from 'react';
import { Component } from 'react';

import { getData } from '../firebase';

class Team extends Component{
    state = {
        teamnum: this.props.num,
        data: ""
    }
    render(){
        return(
            <div>
                
            </div>
        );
    }
    setData = () => {
        this.setState({data: getData(this.state.teamnum)});
    }
}
export default Team;