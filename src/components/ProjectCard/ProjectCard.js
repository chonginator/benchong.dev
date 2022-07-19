import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

import { COLOURS, WEIGHTS, QUERIES } from "../../constants"

const ProjectCard = ({
    coverImage,
    coverImageAlt,
    title,
    description,
    slug,
    comingSoon
}) => {
    return (
        <article>
            <CardHeader>
                <CoverImage
                    image={getImage(coverImage)}
                    alt={coverImageAlt}
                    comingSoon={comingSoon}
                />
            </CardHeader>

            <CardBody>
                <CardTitle>{title}</CardTitle>

                {comingSoon && <CardSubtitle>Coming Soon</CardSubtitle>}

                <CardCopy>{description}</CardCopy>

            </CardBody>

            <CardFooter>
                {!comingSoon && <ProjectLink to={`/projects/${slug}`}>Read case study</ProjectLink>}
            </CardFooter>
        </article>
    )
}

const CardHeader = styled.div`
    border: 1px solid ${COLOURS.text};
    border-radius: 1rem;
    width: fit-content;
`

const CoverImage = styled(GatsbyImage)`
    filter: ${p => p.comingSoon && "blur(5px)"};
    border-radius: inherit;
`

const CardBody = styled.div`
    margin-top: 1.5em;
`

const CardTitle = styled.h2`
    font-size: 1.2rem;

    @media ${QUERIES.tabletAndUp} {
        font-size: revert;
    }
`

const CardSubtitle = styled.span`
    display: block;
    font-style: italic;
    margin-top: -0.4em;
`

const CardCopy = styled.p`
    margin-top: 0.5em;
`

const CardFooter = styled.div`
    margin-top: 1em;
`

const ProjectLink = styled(Link)`
    font-weight: ${WEIGHTS.bold};
    text-decoration: none;

    :visited {
        color: unset;
    }

    :focus,
    :hover {
        text-decoration: revert;
    }
`

export default ProjectCard