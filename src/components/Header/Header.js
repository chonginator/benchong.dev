import React from 'react';
import styled from 'styled-components';

import LinkComponent from '../LinkComponent';

const Header = () => {
  return (
    <Wrapper>
      <LinkComponent href="/resume.pdf" type="external">
        Resume
      </LinkComponent>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  padding-top: 1.25em;
  z-index: 1;
`;

export default Header;
