import React from 'react';
import styled from 'styled-components';
import {useStaticQuery, graphql, Link} from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../../components/layout';
import Button from '../../components/button';
import device from '../../data/info/device';

const AboutMe = () => {

    const data = useStaticQuery(graphql`
        {
            bioImage: file(relativePath: {eq: "bio.jpeg"}) {
                childImageSharp {
                    fluid{
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        
    `);

    return(
        <>
            <Layout maxHeight={true} displayGrid={false}>
                <StyledWraper>
                <Image fluid={data.bioImage.childImageSharp.fluid}/>
                <section>
                    <div>
                        <h1>Bio</h1>
                        <h3>Lorem ipsum dolor sit amet enim.</h3>
                        <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Nulla imperdiet sit amet magna. </p>
                        <p>Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. </p>
                    </div>
                    <Button><Link style={{color:"gray"}} to='/'>&larr; back to all projects</Link></Button>
                </section>
                </StyledWraper>
            </Layout>
        </>
    );
}

const StyledWraper = styled.div`
    text-align:justify;
    display:block;
    margin: 0 0 1rem 0;
    section{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        margin: 0 1rem 0 3rem; 
    }
    @media ${device.tablet}{
        display:grid;
        grid-template-columns:1fr 1fr;
        grid-gap:1rem;

    }
    @media ${device.laptop}{
        display: grid;
        grid-template-columns: 1fr 1fr;
        img{
            margin: 1rem 3rem 1rem 3rem;
            max-height: 70vh;
        }
        section{
            padding: 1rem 3rem 1rem 3rem;
        }
    }
    @media ${device.laptopL}{
        img{
            margin: 3rem;
        }
    }

`;

export default AboutMe;

