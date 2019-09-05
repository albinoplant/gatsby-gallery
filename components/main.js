import React from 'react';
import styled from 'styled-components';
import device from './device'

const StyledMain = styled.main`
min-width:270px;
background-color:white;
padding-top:2rem;

display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
margin: auto;
margin-top:5em;
padding:3em;

@media ${device.laptop}{
    margin: 2em 10% 0 10%;
}
`;

const Main = ({children}) => (
    <StyledMain >{children}</StyledMain>
);
export default Main;
