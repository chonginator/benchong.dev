import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      mdx(fileAbsolutePath: { regex: "/about/" }) {
        body
      }
    }
  `);

  return (
    <section>
      <AboutTitle>About Me</AboutTitle>
      <AboutBody>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </AboutBody>
    </section>
  );
};

const AboutTitle = styled.h2`
  text-align: center;
`;

const AboutBody = styled.div`
  margin-top: 2em;
`;

export default About;
