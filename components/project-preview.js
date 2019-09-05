import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import Button from './button';
//import color from './color';

const StyledLink = styled(Link)`
color: black;
`;


const StyledDiv = styled.div`
border-radius:7px;
display:block;
margin:auto;
transition: 0.1s all ease-in;
padding: 0.5em;
.preview-title{
  color:rgba(0,0,0,0.5);
  
}
  &:hover{
    
  }
  min-width:250px;
  p{
    color:gray;
  }
`;

const ProjectPreview = ({ title, description, slug, imageData }) => {


  return (
      <StyledDiv>
        <Image fluid={imageData} alt={title} />
        <div className="preview-text">
          <h2 className="preview-title">
            <StyledLink to={`/${slug}/`}>{title}</StyledLink>
          </h2>
          <p >
            {description}
          </p>
          <p >
            <StyledLink to={`/${slug}/`}><Button>View this project &rarr;</Button></StyledLink>
          </p>
        </div>
      </StyledDiv>
        
  );
}
export default ProjectPreview;