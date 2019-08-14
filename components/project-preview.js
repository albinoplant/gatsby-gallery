import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

  const ProjectPreview = ({ title, description, slug, imageData }) => (
  <div className="container">
    <div className="preview-image">
      <Link to={`/${slug}/`}>
        <Image  fluid={imageData} alt={title} />
      </Link>
    </div>
    <div className="preview-text">
      <h2 className="preview-title">
        <Link to={`/${slug}/`}>{title}</Link>
      </h2>
      <p >
        {description}
      </p>
      <p >
        <Link to={`/${slug}/`}><button>View this project</button></Link>
      </p>
    </div>
  </div>
);

export default ProjectPreview;