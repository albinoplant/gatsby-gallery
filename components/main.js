import React from 'react';
import styled from 'styled-components';
import device from '../data/info/device'


const Main = (props) => { 
    console.log(props.displayGrid);
    return(
    <StyledMain maxHeight={props.maxHeight} displayGrid={props.displayGrid} >{props.children}</StyledMain>
);
}

const StyledMain = styled.main`

    display: ${props => props.displayGrid ? 
    "grid" : "flex"};
    max-height: ${props => props.maxHeight ? "85vh":""} !important;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    background-color:white;
    padding-top:2rem;
    margin: auto;
    margin-top:5em;
    @media ${device.tablet}{
        padding:3em;
    }
    @media ${device.laptop}{
        margin: 2em 10% 0 10%;
    }
`;

export default Main;
