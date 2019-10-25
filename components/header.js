import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Button from './button';
import device from '../data/info/device';
import color from '../data/info/color';
import Mail from '../data/svg/mail';
import Instagram from '../data/svg/instagram';

const PopUpWindow = (props) => (
    <StyledWrapper>
        <Button onClick={()=> props.setOn(!props.isOn)}  id="exit">Close</Button> 
        <div id="container">     
            <div>
                <Instagram /><Button>Chceck my Instagram</Button>
                <Mail /><Button>Send me an email</Button>
                <Button onClick={()=> props.setOn(!props.isOn)} id="exit2">Close</Button> 

            </div>
        </div>

    </StyledWrapper>
);

const Header = (props) => {
    const [isOn, setOn] = useState(true);

    if (isOn) {
        return (
            <StyledHeader>
                <Background visable={props.visable}>
                    <StyledLink to="/">Site</StyledLink>
                    <div>
                        <Button onClick={() => setOn(!isOn)}>Contact</Button>
                        <Button><Link to="/aboutMe">About Me</Link></Button>
                    </div>
                </Background>
            </StyledHeader>
        );
    } else {
        return (
            <>
                <StyledHeader>
                    <Background visable={props.visable}>
                        <StyledLink to="/">Site</StyledLink>
                        <div>
                            <Button onClick={() => setOn(!isOn)}>Contact</Button>
                            <Button><Link to="/aboutMe">About Me</Link></Button>
                        </div>
                    </Background>
                </StyledHeader>
                <PopUpWindow setOn={setOn} isOn={isOn} />
            </>
        );
    }
}

const StyledWrapper = styled.div`
    @media (max-width:767px) {
        #exit{
            display:none;
        }
        #exit2{
            margin-top:2rem;
            color:white;
            background-color:${color.mainColor};
        }
        #container{
            width:100%;
            height:100%;
        }
        
    }
    @media ${device.tablet}{
        #exit2{
            display:none;
        }
    }
    #exit{
        background-color:${color.mainColor};
        color:white;
        margin:0.5rem;
        align-self:auto;
        width:10vh;
        margin-right:55vh;
        margin-left:35vh;
        @media ${device.tablet}{
        width:10vh;
        margin-right:75vh;
        margin-left:15vh;
        }
    }
    Button{
        background-color:white;
    }
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    height:100vh;
    width: 100vw;
    z-index:10007;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    background-color: rgba(100,100,100, 0.3);
    #container{
        div{
            Button{
                padding:0.6rem;
                height:100%;
                align-self:center;

            }
            align-items:center;
            display:flex;
            flex-direction:column;
            @media ${device.tablet} {
                flex-direction:row;
            }
        }
        padding:3rem;
        border-radius:30px;
        box-shadow: 0 4px 7px 7px rgba( 0, 0, 0, 0.5);
        background-color:${color.mainColor};
    }

`;

const StyledHeader = styled.header`
    Button{
        color:white;
        
    }
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
                    
    }
`;

const Background = styled.div`
    position: fixed;
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin-top:${(props) => props.visable ? "0" : "-7em"};
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

export default Header