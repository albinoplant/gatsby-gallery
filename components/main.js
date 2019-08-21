import React from 'react';
import styled from 'styled-components';
import color from './color'

const StyledMain = styled.main`
background-color: ${color.secondaryColor}; 
padding-top:2rem;
`;

const Main = ({children}) => (
    <StyledMain >{children}</StyledMain>
);
export default Main;
