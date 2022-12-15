import React from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import styled from 'styled-components';
import LinkComponent from '../LinkComponent';

import { WEIGHTS } from '../../constants';

const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  return (
    <Wrapper>
      {!isHomePage && <StyledLink to="/">Home</StyledLink>}
      <ResumeButton href="/resume.pdf" type="external">
        Resume
      </ResumeButton>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  padding-top: 1.25em;
  z-index: 1;
`;

const StyledLink = styled(Link)`
  font-size: 1.25rem;
  font-weight: ${WEIGHTS.bold};
  text-decoration: none;

  :focus,
  :hover {
    text-decoration: revert;
  }
`;

const ResumeButton = styled(LinkComponent)`
  margin-left: auto;
`;

export default Header;
