import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import Button from '../../components/button.js';
import styled from 'styled-components';

const Project = ({ title, description, url, imageData }) => (
  <StyledWrapper>    
    <div className="project">
      <h1>{title}</h1>
      <Image fluid={imageData} alt={title} />
      <p>{description}</p>
      <p>
        <Button><a style={{color:"gray"}} href={url}>View this project online &rarr;</a></Button>
      </p>
      <Button><Link to="/" style={{color:"gray"}}>&larr; back to all projects</Link></Button>
    </div>
  </StyledWrapper>

);

const StyledWrapper = styled.div`
  
`; 

export default Project;