import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import PageHead from "../head/page-head";
import Left from "../left/left";
import Center from "../center/center";
import Right from "../right/right";

import '../../css/style.css';
import '../../css/app/app.css'



export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            myWidth: window.innerWidth
        };
    }

    isWidthChange = () =>{
        if(window.innerWidth !== this.state.myWidth){
            this.setState({myWidth: window.innerWidth});
        }
    };

    render() {
        return(
            // <div className="wpbox" onMouseOut={this.isWidthChange}>
            <div className="wpbox" onMouseOut={this.isWidthChange}>
                <PageHead/>
                <div className="mrbox">
                    <Left/>
                    <Center/>
                    <Right/>
                </div>
            </div>
        )
    }
}