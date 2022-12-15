import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <Links>
        <Link href="https://github.com/chonginator" target="_blank">
          GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/benhchong" target="_blank">
          LinkedIn
        </Link>
      </Links>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: 1em;
  padding-top: 5em;
  padding-bottom: 1.25em;
`;

const Links = styled.div`
  display: flex;
  gap: 1em;
`;

const Link = styled.a`
  text-decoration: unset;
  color: inherit;

  :focus,
  :hover {
    text-decoration: underline;
  }
`;

export default Footer;
