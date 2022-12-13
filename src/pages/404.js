import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import SilhouetteText from '../components/SilhouetteText';
import LinkComponent from '../components/LinkComponent';
import { COLOURS } from '../constants';

const NotFoundPage = () => {
  return (
    <Wrapper>
      <SilhouetteText text="404" />
      <p>
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <LinkComponent href="/">Go home</LinkComponent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Barlow', sans-serif;
  font-size: 1.5rem;
  color: ${COLOURS.text};
  text-align: center;
`;

export default NotFoundPage;
