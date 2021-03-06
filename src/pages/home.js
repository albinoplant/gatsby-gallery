import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../../components/layout';
import ProjectPreview from '../../components/project-preview';
import Hello from '../../components/hello'

const Home = (props) => {


  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);
  const projects = data.allProjectsJson.edges;

  return (
    <div>
    <Hello scrollPos ={props.scrollPos}/>
    <Layout displayGrid={true}>
      {projects.map(({ node: project }) => {
        const title = project.title;
        const description = project.description;
        const slug = project.slug;
        const imageData = project.image.childImageSharp.fluid;

        return (
          <ProjectPreview
            title={title}
            description={description}
            slug={slug}
            imageData={imageData}
          />
        );
      })}
    </Layout>
    </div>
  );
};

export default Home;