import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { COLOURS, WEIGHTS } from '../../constants';

const LinkComponent = ({ href, type = 'internal', children }) => {
  return (
    <Wrapper
      href={href}
      to={type === 'internal' && href}
      target={type === 'internal' ? '_self' : '_blank'}
      as={type === 'internal' ? Link : 'a'}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.a`
  font-size: 1.25rem;
  font-weight: ${WEIGHTS.bold};
  color: ${COLOURS.primary};
  background-color: ${COLOURS.text};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 0.5em 1em;
  text-decoration: none;

  :hover,
  :focus {
    opacity: 0.9;
  }
`;

export default LinkComponent;
