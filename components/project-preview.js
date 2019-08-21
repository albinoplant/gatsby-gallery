import React, { useState } from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

const StyledWrapper = styled.div`
.container{
  display:grid;

}
`;

const ProjectPreview = ({ title, description, slug, imageData }) => {
  const [isClicked, setClick] = useState(false);
  let clickId = isClicked ? "zoom" : "";

  return (
    <StyledWrapper>
      <div
        className="container"
        onClick={() => (setClick(!isClicked))}
        id={clickId}
      >
        <div >
          <Image fluid={imageData} alt={title} />
        </div>
        <div className="preview-text">
          <h2 className="preview-title">
            <Link to={`/${slug}/`}>{title}</Link>
          </h2>
          <p >
            {description}
          </p>
          <p >
            <Link to={`/${slug}/`}><button>View this project &rarr;</button></Link>
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
}
export default ProjectPreview;