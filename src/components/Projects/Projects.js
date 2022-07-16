import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import ProjectCard from "../ProjectCard"

const Projects = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(sort: {fields: id, order: ASC}) {
                nodes {
                    frontmatter {
                        id
                        title
                        cover_image_alt
                        description
                        coming_soon
                        cover_image {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 480
                                    height: 320
                                    placeholder: BLURRED
                                )
                            }
                        }
                    }
                    slug
                }
            }
        }
    `)
    console.log(data)
    const projects = data.allMdx.nodes.map(node => {
        // Destructure frontmatter fields
        const {
            frontmatter: {
                title,
                cover_image_alt,
                description,
                cover_image,
                coming_soon
            },
            slug
        } = node

        return (
            <ProjectCard 
                key={slug}
                coverImage={cover_image}
                coverImageAlt={cover_image_alt}
                title={title}
                description={description}
                slug={slug}
                comingSoon={coming_soon}
            />
        )    
    })

    return (
        <ProjectsSection>
            {projects}
        </ProjectsSection>
    )
}

const ProjectsSection = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1em;
`

export default Projects