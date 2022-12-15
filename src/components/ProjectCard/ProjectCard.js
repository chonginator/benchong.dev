import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { COLOURS, WEIGHTS, QUERIES } from '../../constants';

const ProjectCard = ({
  coverImage,
  coverImageAlt,
  title,
  description,
  slug,
  comingSoon,
}) => {
  return (
    <article>
      <CardHeader>
        <StyledLink to={`/projects/${slug}`}>
          <CardImage
            image={getImage(coverImage)}
            alt={coverImageAlt}
            comingSoon={comingSoon}
          />
        </StyledLink>
      </CardHeader>

      <CardBody>
        <CardTitle>
          <StyledLink to={`/projects/${slug}`}>{title}</StyledLink>
        </CardTitle>

        {comingSoon && <CardSubtitle>Coming Soon</CardSubtitle>}

        <CardCopy>{description}</CardCopy>
      </CardBody>

      <CardFooter>
        {!comingSoon && (
          <StyledLink to={`/projects/${slug}`}>Read case study</StyledLink>
        )}
      </CardFooter>
    </article>
  );
};

const CardHeader = styled.div`
  border: 1px solid ${COLOURS.text};
  width: fit-content;
  border-radius: 1rem;
`;

const CardImage = styled(GatsbyImage)`
  filter: ${(p) => p.comingSoon && 'blur(5px)'};

  img {
    border-radius: 1rem;
  }
`;

const CardBody = styled.div`
  margin-top: 1.5em;
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;

  @media ${QUERIES.tabletAndUp} {
    font-size: revert;
  }
`;

const CardSubtitle = styled.span`
  display: block;
  font-style: italic;
  margin-top: -0.4em;
`;

const CardCopy = styled.p`
  margin-top: 0.5em;
`;

const CardFooter = styled.div`
  margin-top: 1em;
`;

const StyledLink = styled(Link)`
  font-weight: ${WEIGHTS.bold};
  text-decoration: none;
  overflow: hidden;

  :visited {
    color: unset;
  }

  :focus,
  :hover {
    text-decoration: revert;
  }
`;

export default ProjectCard;
