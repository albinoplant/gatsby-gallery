import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Button from './button';
import device from '../data/info/device';
import color from '../data/info/color';


const StyledHeader = styled.header`
top: 0;
left: 0;
width: 100%;
height: 3em;
z-index: 10000;
position:absolute;
    a{
        color: #fff;
    }
@media ${device.laptop} {
                  
}`;

const Background = styled.div`
position: fixed;
display:flex;
justify-content:space-around;
align-items:center;
margin-top:${(props)=>props.visable?"0":"-7em"};
width:100%;
height:3em;
background-color: ${color.mainColor};
transition: margin-top .5s;
border-bottom-left-radius: 7px;
border-bottom-right-radius: 7px;
box-shadow: rgba(0,0,0,0.2) 5px 5px 5px;
`;

const StyledLink = styled(Link)`
    font-size: 2em;
    font-weight: 600;
    z-index: 10001;
    text-shadow: 0px 0px 1px ${color.mainColorLight};
    transition: all 0.3s ease-out;
    &:hover{
        text-shadow: 0px 0px 5px ${color.mainColorLight};
    }
`;

const Header = (props) =>(
                <StyledHeader>
                    <Background visable={props.visable}>
                        <StyledLink to="/">Site</StyledLink>
                            <div>
                                <Button>Contact</Button>
                                <Button>About Me</Button>
                            </div>
                    </Background>
                </StyledHeader>

        );
export default Header