import React,{Component} from "react"
import Home from "./home"
import window from 'global';

import("./style.scss")

export default class Index extends Component{    
    constructor(props){
    super(props);
    
    this.state = {
        prevScrollPos: window.pageYOffset,
        visable: true,
    };

    } 
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll = () => {
        const { prevScrollPos } = this.state;
        
        const currentScrollPos = window.pageYOffset;

        const visable = (currentScrollPos===0)?true:(prevScrollPos >= currentScrollPos);

        this.setState({
            prevScrollPos: currentScrollPos,
            visable,
        });

    };
    render(){
 
        return(
            <Home scrollPos={this.state.prevScrollPos} visable={this.state.visable}/>
        );
    }
}
