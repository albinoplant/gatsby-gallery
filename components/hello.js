import React from 'react';
import styled, {keyframes} from 'styled-components';

import Hand from '../data/svg/hand.js';
import color from '../data/info/color';
import device from '../data/info/device';

const intro = keyframes`
    0% {
        opacity: 0;
        transform: translateY(0px);
    }
    30% {
        opacity: 0.8
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0px);
    }
`;

const rotate = keyframes`
    0%{
        transform: rotate(0deg);
    }
    25%{
        transform: rotate(45deg);
    }
    50%{
        transform: rotate(-25deg);
    }
    75%{
        transform: rotate(25deg);
    }
    100%{
        transform: rotate(0deg);
    }
`;

const Container = styled.div`
    padding:2em;
    display:flex;
    flex-flow:column;
    align-items:center;
    justify-content:center;
    background-color:${color.mainColor};
    height:100vh;
    min-height:45vh;
    box-shadow:${color.mainColor} 0px 0px 1em;
    color:white;
    @media ${device.tablet}{
            font-size:2em;
        }
        font-size:1em;
    h1{
        animation: ${intro} 1.5s ease-out;
        margin: -0.5em 2em 0.5em 2em;
    }
    svg{
        height:6em;
        &:hover{
            animation: ${rotate} 1s ease-in-out;
            transform-origin:bottom;
            path{
                fill:${color.mainColorDark};
            }
        }
        path{
            fill:white;
        }
        animation: ${intro} 1.5s ease-out;

    }
`;

const Hello = (props) => (  
        <Container>
            <h1>Welcome to my portfolio site!</h1>
            <Hand wave={props.scrollPos/*i co tu zrobić, jak przekazać tego propsa do stylu? */}/>
        </Container>

);
export default Hello;