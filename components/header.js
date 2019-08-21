import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import device from './device';
import color from './color';

const StyledHeader = styled.header`
top: 0;
left: 0;
width: 100%;
height: 3em;
position:fixed;
display:flex;
justify-content:center;
align-items:center;
z-index: 10000;
padding-bottom: 0.3em;
    a{
        color: #fff;
    }
@media ${device.laptop} {
    justify-content:flex-start;
    padding-left:1em;                   
}`;

const Background = styled.div`
margin-top:${(props)=>props.visable?"0":"-7em"};
width:100%;
height:100%;
background-color: ${color.mainColor};
position:absolute;
left:0;
transition: margin-top .5s;
border-bottom-left-radius: 7px;
border-bottom-right-radius: 7px;
`;

const StyledLink = styled(Link)`
    position:relative;
    font-size: 2em;
    font-weight: 600;
    z-index: 10001;
`;

export default class Header extends Component {

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
        const visable = prevScrollPos >= currentScrollPos;

        this.setState({
            prevScrollPos: currentScrollPos,
            visable,
        });

    };
    render(){
        console.log(this.state.visable);
        return (
                <StyledHeader>
                    <Background visable={this.state.visable}/>
                        <StyledLink to="/">Site</StyledLink>
                </StyledHeader>

        );
    }
};
