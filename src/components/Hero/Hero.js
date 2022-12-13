import React from 'react';
import styled from 'styled-components';

import SilhouetteText from '../SilhouetteText';
import { WEIGHTS } from '../../constants';

const Hero = () => {
  return (
    <section>
      <SilhouetteText text="Hello, World!" />
      <SubHeading>
        I'm <Name>Ben Chong</Name>, a frontend developer who loves making
        useful, beautiful things with code.
      </SubHeading>
    </section>
  );
};

const SubHeading = styled.p`
  text-align: center;
  font-size: 1.25rem;
`;

const Name = styled.span`
  font-weight: ${WEIGHTS.bold};
`;

export default Hero;
