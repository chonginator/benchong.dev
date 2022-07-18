import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"

import Layout from "../../components/Layout"
import { WEIGHTS } from "../../constants"

const ProjectPage = ({ data }) => {
    const {
        mdx: {
            frontmatter: {
                client,
                cover_image,
                cover_image_alt,
                title,
                tech_stack,
                links
            },
            body
        }
    } = data
    console.log(tech_stack)

    return (
        <Layout>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectFrontmatter>
                <div>
                    <Field>Tech Stack</Field>
                    <span>
                        {
                            tech_stack.join(', ')
                        }
                    </span>
                </div>

                <div>
                    <Field>Links</Field>
                    <ProjectLinks>
                        {
                            links.map(link =>
                                <li key={link}>
                                    <Link
                                        href={link}
                                        target="_blank"
                                    >
                                        Visit website
                                    </Link>
                                </li>
                            )
                        }
                    </ProjectLinks>
                </div>
            </ProjectFrontmatter>
            <main>
                <MDXRenderer>
                    {body}
                </MDXRenderer>
            </main>
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                client
                cover_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                cover_image_alt
                title
                tech_stack
                links
            }
            body
        }
    }
`

const ProjectTitle = styled.h1`
    font-size: 4rem;
`

const ProjectFrontmatter = styled.div`
    /* border: 1px solid red; */
    display: flex;
    gap: 2.5em;
`

const Field = styled.span`
    display: block;
    font-size: 1.25rem;
    font-weight: ${WEIGHTS.bold}
`

const ProjectLinks = styled.ul`
    list-style-type: none;
    padding-left: 0;
`

const Link = styled.a`
    :visited {
        color: unset;
    }
`

export default ProjectPage